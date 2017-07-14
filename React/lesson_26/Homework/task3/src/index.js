// Используйте маршрутизацию. Дополните код предыдущей задачи; реализуйте следующее:
//     * В приложении должно быть три страницы (routes):
// 1. страница по умолчанию, на которой отображаются данные списка заданий;
// 2. страница для редактирования: добавления/удаления элементов списка, редактирования
// уже существующих элементов
// 3. страница about, на которой пользователь может оценить приложение по 5-балльной шкале и
// увидеть рейтинг приложения (среднее арифметическое всех пользовательских оценок)

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import taskStore from './stores/appStore'
import './style/index.css';
import App from './App';
import {Router, hashHistory, Route, IndexRoute} from 'react-router';
import About from "./views/About";
import EditUsers from "./views/EditUsers";
import reducers from './reducers'
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore (reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/">
                <IndexRoute component={App} />
                <Route path="about" component={About} />
                <Route path="edit" component={EditUsers} />
            </Route>
        </Router>
    </Provider>, document.getElementById ('root'));