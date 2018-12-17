import React from 'react';
import PropTypes from 'prop-types';


const Login = props => (
    <nav className="login">
        <h2>Kitchen Login</h2>
        <p>Sign In To Access The Kitchen</p>
        <button className="facebook" onClick={()=> props.authenticate('Facebook')}>Login with Facebook</button>
        <button className="github" onClick={()=> props.authenticate('Github')}>Login with Github</button>
    </nav>
    );
    
Login.propTypes = {
    authenticate: PropTypes.func.isRequired 

}


export default Login;