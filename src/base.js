import Rebase from 're-base';
import firebase from 'firebase';



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDAefHWHOpq15ASFqLOZzXI2Mn3a8YS7S8",
    authDomain: "chefspert-5ca29.firebaseapp.com",
    databaseURL: "https://chefspert-5ca29.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;