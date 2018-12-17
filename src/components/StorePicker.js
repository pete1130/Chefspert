import React, {Component} from 'react';
import {getStoreName} from '../helpers';

class StorePicker extends Component {
   chefNameRef = React.createRef();    
    
    goToKitchen = e => {
        e.preventDefault();
        
        const chefName = this.chefNameRef.value.value;

        this.props.history.push(`/chef/${chefName}`);
    }
    render(){
        return (
            <form className="store-selector" onSubmit={this.goToKitchen}>
                <h1>Spotlight Chef of the Day</h1>
                <input 
                    type="text" 
                    ref={this.chefNameRef}
                    required placeholder="Chef Name" 
                    default value={getStoreName()}/>
                <button 
                    type="submit">Visit Chef's Kitchen</button>
            </form>
        )
    }
}

export default StorePicker;