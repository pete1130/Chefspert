import React, {Component} from 'react';
import Order from './Order';
import Inventory from './Inventory';
import Header from './Header';
import Dish from './Dish';
import sample from '../sample-menu';
import base from '../base';


class App extends Component {
    state = {
        dishes: {},
        order: {}
    };

    componentDidMount() {
        const { params } = this.props.match;
        
        const localStorageRef = localStorage.getItem(params.chefId);
        if (localStorageRef) {
            this.setState({order: JSON.parse(localStorageRef)});
        }
        
        this.ref = base.syncState(`${params.chefId}/dishes`,{
            context: this,
            state: 'dishes'
        });
    }

    componentDidUpdate() {
       localStorage.setItem(this.props.match.params.chefId, JSON.stringify(this.state.order));
    }


    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    addDish = dish => {
        const dishes = {...this.state.dish}
        
        dishes[`dish${Date.now()}`] = dish

        this.setState({dishes});
    };

    updateDish = (key, updatedDish) => {
        const dishes = {...this.state.dishes};
        dishes[key] = updatedDish;
        this.setState({dishes});
    }

    deleteDish = (key) => {
        const dishes = {...this.state.dishes};
        dishes[key] = null;
        this.setState({dishes})
    }

    removeFromOrder = (key) => {
        const order = {...this.state.order};
        delete order[key];
        this.setState({order})
    }

    loadSample = () => {
        this.setState({dishes: sample});
    };

    addToOrder = key => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({order})
    };
 


    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Homemade Meals"/>
                    <ul className="fishes">
                        {Object.keys(this.state.dishes).map(key => 
                        <Dish 
                        key={key}
                        index={key} 
                        details={this.state.dishes[key]} //passing each object through details.
                        addToOrder={this.addToOrder}/>)}
                    </ul>
                </div>
                <Inventory 
                    addDish={this.addDish}
                    sampleMenu={this.loadSample}
                    dishes={this.state.dishes} 
                    updateDish = {this.updateDish} 
                    deleteDish = {this.deleteDish}
                    chefID={this.props.match.params.chefId}
                    />
                <Order 
                    dishes={this.state.dishes} 
                    order={this.state.order}
                    removeFromOrder={this.removeFromOrder}/>
                
            </div>
        )
    }
}


export default App;