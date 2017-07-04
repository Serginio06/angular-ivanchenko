// Создайте 2 React компонента – родительские компонент, содержащий поле ввода и
// дочерний компонент, содержащий список элементов массива users:
//
// Реализуйте следующее:
//     При вводе числа в поле ввода должно отображаться соответсвующее количество элементов списка.

    import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

var users = [{name:"Anne Montgomery",gender:"Female"},
    {name:"Annie George",gender:"Female"},
    {name:"Gary Butler",gender:"Male"},
    {name:"Lisa Mendoza",gender:"Female"},
    {name:"Marilyn Henry",gender:"Female"},
    {name:"Johnny Tucker",gender:"Male"},
    {name:"Chris Jacobs",gender:"Male"},
    {name:"Benjamin James",gender:"Male"}];


ReactDOM.render(<App 	users={users}/>, document.getElementById('root'));
// registerServiceWorker();
