// Создайте React компонент, который выведет на экран массив users в виде таблицы.
//     Массив users для задачи:

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
    {name:"Benjamin James",gender:"Male"}]


ReactDOM.render(<App 	users={users}/>, document.getElementById('root'));
// registerServiceWorker();
