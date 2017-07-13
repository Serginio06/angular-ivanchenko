// Создайте React компонент с полем ввода и элементом h1. При изменении его
// значения (при вводе текста) ,реализуйте отображение этого тектса в элементе h1.
//     Используйте Redux.

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