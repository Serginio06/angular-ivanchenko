import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory, Route, IndexRoute} from 'react-router';
// import Landing_features from "./Landing_features.jsx";
import NewsDetails from "./NewsDetails.jsx";
import ServicesTabs from './ServicesTabs.jsx'


import './../css/all.css';
// import './../css/style.css';
// import './../css/landing.css';
import App from './App.jsx';
import reducers from './reducers'
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import './../../static/vendors/fonts/glyphicons-halflings-regular.woff2';
// import './../../static/vendors/fonts/glyphicons-halflings-regular.woff';
// import './../../static/vendors/fonts/glyphicons-halflings-regular.ttf';
// import './../../static/vendors/fonts/glyphicons-halflings-regular.svg';
// import './../../static/vendors/fonts/glyphicons-halflings-regular.eot';

// ReactDOM.render(<App />, document.getElementById('root'));

const store = createStore (reducers, composeWithDevTools(applyMiddleware(thunk)));

// ReactDOM.render (
//     <Provider store={store}>
//         <Router history={hashHistory}>
//             <Route path="/">
//                 <IndexRoute component={App} />
//                 <Route path="/details" component={NewsDetails}></Route>
//
//             </Route>
//         </Router>
//     </Provider>, document.getElementById ('root'));



ReactDOM.render (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="/news-details/:id" component={NewsDetails} mydata={333}></Route>
                <Route path="/service/:category" component={ServicesTabs}></Route>
            </Route>
        </Router>
    </Provider>, document.getElementById ('root'));