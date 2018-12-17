import React, {Component} from 'react';
import {formatPrice} from '../helpers'

class Dish extends Component {
    render(){
        const {image, name, price, desc, status} = this.props.details;

        const isAvailable = status === "available";
        
        return (
           <li className="menu-fish">
            <h5 className="fish-name">{name}
                <span className="price">{formatPrice(price)}</span>
            </h5>
            <img src={image} alt={name}/>
            <p>{desc}</p>
            <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.index)}>{isAvailable ? 'Add To Order' : 'Sold out!'}</button>
           </li>
        );
    }
}

export default Dish;