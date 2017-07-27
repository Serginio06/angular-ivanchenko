import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory, Route, IndexRoute} from 'react-router';
import NewsDetails from "./NewsDetails.jsx";
import ServicesTabs from './ServicesTabs.jsx'


import './../css/all.css';

import App from './App.jsx';
import reducers from './reducers'
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const store = createStore (reducers, composeWithDevTools(applyMiddleware(thunk)));


ReactDOM.render (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="/news-details/:id" component={NewsDetails} mydata={333}></Route>
                <Route path="/service/:category" component={ServicesTabs}></Route>
                <Route path="*" component={App}/>
            </Route>
            <Route path="*" component={App}/>
        </Router>
    </Provider>, document.getElementById ('root'));