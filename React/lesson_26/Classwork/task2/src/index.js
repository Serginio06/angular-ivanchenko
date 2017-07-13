// Используя Redux, реализуйте следующее:
//     * Создайте React компонент, который содержит кнопку
// * Создайте его дочерний компонент, который принимает в качестве свойства массив users и
// отображает его в виде списка при клике по кнопке первого компонента

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import textStore from './stores/appStore'
import './style/index.css';
import App from './App';

ReactDOM.render (
    <Provider store={textStore}>
        <App />
    </Provider>, document.getElementById ('root'));