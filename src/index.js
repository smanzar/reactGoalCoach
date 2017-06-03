import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory } from 'react-router';
import {firebaseApp} from './firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import {logUser } from './action'

import App from './component/App';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';

const store=createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
        //console.log('sign up or in',user);
        const {email} = user;
        store.dispatch(logUser(email));
        browserHistory.push('/app');
    }
    else
    {
        //console.log('not sign in')
        browserHistory.replace('/signin');
}
})

ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={browserHistory}>
            <Route path="/app" component={App}></Route>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/signup" component={SignUp}></Route>    
        </Router>
    </Provider>,
    document.getElementById('root')
)