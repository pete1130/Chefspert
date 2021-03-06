import React, {Component} from 'react';
import {formatPrice} from '../helpers'
import {TransitionGroup, CSSTransition} from 'react-transition-group';


class Order extends Component {
    renderOrder = key => {
        const dish = this.props.dishes[key];
        const count = this.props.order[key];
        const isAvailable = dish && dish.status === 'available'
        const transitionOptions = {
            classNames: "order",
            key,
            timeout: {enter: 500, exit: 500}
        }

        
        if(!dish) return null;
        
        if(!isAvailable) {
            return (
                <CSSTransition {...transitionOptions}>
                    <li key={key}>
                        Sorry {dish ? dish.name : 'dish'} is no longer available.
                    </li>
                </CSSTransition>
            );
        }
        return (
            <CSSTransition {...transitionOptions}>
                <li key={key}>
                    <span>
                        <TransitionGroup component="span" className="count">
                            <CSSTransition classNames="count" key={count} timeout={{enter:5000, exit: 5000}}>
                            <span>{count}</span>
                            </CSSTransition>
                        </TransitionGroup>
                        - {dish.name} {""}
                        {formatPrice(count * dish.price)}
                        <button onClick={()=>this.props.removeFromOrder(key)}>&times;</button>
                    </span>
                </li>
            </CSSTransition>
        );
    };

    
    render(){
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const dish = this.props.dishes[key];
            const count = this.props.order[key];
            const isAvailable = dish && dish.status === 'available';
            if(isAvailable) {
                return prevTotal + (count * dish.price);
            }

            return prevTotal;

        }, 0);

        return (
            <div className="order-wrap">
                <h2>Cart View</h2>
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                <div className="total">
                    Total: 
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    }
}

export default Order;