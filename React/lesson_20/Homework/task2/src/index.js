// Модифицируйте код предыдущей задачи. Реализуйте следующее:
//     * При каждом обновлении свойств компонента, содержащего список users,  его текст окрашивается в случайный цвет. Используйте при решении задачи методы жизненного цикла React компонентов.
//     Функция для получения случайного цвета:
//     ```
//             function getRandomColor() {
//                 var h = Math.floor(Math.random() * (255 - 1) + 1);
//                 var s = Math.floor(Math.random() * (100 - 1) + 1) + '%';
//                 var l = '50%';
//                 var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
//                 return randomColor;
//             }


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
