import React, {Component} from 'react';
import Request from './Request';
import PropTypes from "prop-types";
import EditDishForm from './EditDishForm';
import Login from './Login';
import firebase from 'firebase';
import base, {firebaseApp} from "../base";



class Inventory extends Component {
    static propTypes = {
        dishes: PropTypes.object,
        updateDish: PropTypes.func,
        deleteDish: PropTypes.func,
        sampleMenu: PropTypes.func
      };

    state = {
        uid: null,
        owner: null
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.authHandler({user});
            }
        });
    }

    authHandler = async authData => {
        const store = await base.fetch(this.props.chefID, {context: this});
        
        if(!store.owner) {
            await base.post(`${this.props.chefID}/owner`, {
                data: authData.user.uid 
            });
        }

        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid
        });
    };

    authenticate = provider => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
    }

    logout = async () => {
        console.log('Logging out');
        await firebase.auth().signOut();
        this.setState({uid:null});
    }

    render(){
        const logout = <button onClick={this.logout}>Log Out</button>;

        if (!this.state.uid) {
            return <Login authenticate={this.authenticate}/>;
        }

        if (this.state.uid !== this.state.owner) {
            return (
            <div>
                <p>Sorry you are not the Chef.</p>
                {logout}
            </div>
            );
        }


        
        return (
           <div className="inventory">
            <h2>Menu Settings</h2>
            {logout}
            {Object.keys(this.props.dishes).map(key => <EditDishForm 
                key={key} 
                index={key}
                dish={this.props.dishes[key]} 
                updateDish={this.props.updateDish}
                deleteDish={this.props.deleteDish}
                />)}
            <Request addDish={this.props.addDish}/>
            <button onClick={this.props.sampleMenu}>Sample Menu</button>
           </div>
        )
    }
}

export default Inventory;