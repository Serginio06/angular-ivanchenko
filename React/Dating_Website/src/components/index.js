import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory, Route, IndexRoute} from 'react-router';
import Login from "./Login.jsx";
import './../css/all.css';
// import './../css/style.css';
// import './../css/landing.css';
import App from './App.jsx';
import reducers from './reducers'
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// ReactDOM.render(<App />, document.getElementById('root'));

const store = createStore (reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/">
                <IndexRoute component={App} />
                <Route path="login" component={Login} />
            </Route>
        </Router>
    </Provider>, document.getElementById ('root'));