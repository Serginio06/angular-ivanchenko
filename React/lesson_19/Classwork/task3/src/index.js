// Создайте React компонент,  который принимает два числа в качестве свойств (props).
//     Компонент должен выводить на экран сумму своих свойств.

import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App 	summand1="5" 	summand2="3"/>, document.getElementById('root'));
// registerServiceWorker();
