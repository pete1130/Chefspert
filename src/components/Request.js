import React, {Component} from 'react';
import PropTypes from "prop-types";

class Request extends Component {
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    static propTypes = {
        addFish: PropTypes.func
      };

    createDish = e => {
        e.preventDefault();

        const dish = {
            name: this.nameRef.value.value,
            price: parseFloat(this.priceRef.value.value),
            status: this.statusRef.value.value,
            desc: this.descRef.value.value,
            image: this.imageRef.value.value,
        };
        console.log(dish)
        this.props.addDish(dish);

        e.currentTarget.reset();
    }

    render(){
        return (
           <form className="fish-edit" onSubmit={this.createDish}>
            <input name="name" ref={this.nameRef} type="text" placeholder="Dish"/>
            <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>
            <select name="status" ref={this.statusRef}>
                <option value="available">Fresh & Available!</option>
                <option value="unavailable">Sold Out!</option>
            </select>
            
            <textarea name="desc" ref={this.descRef}placeholder="Description"/>
            <input name="image" ref={this.imageRef} type="text" placeholder="Image"/>
            <button type="submit">Add Dish</button>
           </form>
        );
    }
}

export default Request;