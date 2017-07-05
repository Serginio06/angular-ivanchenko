// Используя синтаксис ES6, создайте React компонент, содержащий кнопку
// и выводящий на экран при клике по кнопке свои свойства(props) в виде списка.


    import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';

var users = [{name:"Anne Montgomery",gender:"Female"},
    {name:"Annie George",gender:"Female"},
    {name:"Gary Butler",gender:"Male"},
    {name:"Lisa Mendoza",gender:"Female"},
    {name:"Marilyn Henry",gender:"Female"},
    {name:"Johnny Tucker",gender:"Male"},
    {name:"Chris Jacobs",gender:"Male"},
    {name:"Benjamin James",gender:"Male"}];


ReactDOM.render(<App 	users={users}/>, document.getElementById('root'));
