import React, {Component} from 'react';

class EditDishForm extends Component {
    handleChange = (e) => {
        console.log(e.currentTarget.value);
        const updatedDish = {
            ...this.props.dish,
            [e.currentTarget.name]: e.currentTarget.value
        };
        this.props.updateDish(this.props.index,updatedDish)
    };

    render(){
        return (
            <div className = "fish-edit">
                <input 
                    type="text" 
                    name="name" 
                    onChange={this.handleChange} 
                    value={this.props.dish.name}/>
                <input 
                    type="text" 
                    name="price" 
                    onChange={this.handleChange}  
                    value={this.props.dish.price}/>
                <select 
                    type="text" 
                    name="status" 
                    onChange={this.handleChange}>
                    <option 
                        value="available">Fresh & Available!</option>
                    <option 
                        value="unavailable">Sold Out!</option>
                </select>
                <textarea 
                    type="text" 
                    name="desc" 
                    onChange={this.handleChange} 
                    value={this.props.dish.desc}/>
                <input 
                    type="text" 
                    name="image" 
                    onChange={this.handleChange} 
                    value={this.props.dish.image}/>
                <button onClick={()=>this.props.deleteDish(this.props.index)}>Remove Dish</button>
            </div>

        );
    }
}

export default EditDishForm;