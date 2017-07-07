// Создайте 2 файла с React компонентами, содержащими текст ‘View 1’ и
// ‘View2’. Создайте файл index.js, в котором
// выполните настройку маршрутизации для переключения между путями “/view1” и “/view2”.
// ### Задача 2
// Модифицируйте код предыдущей задачи. Добавьте в приложение файл с React компонентом, который
// создает разметку с текстом: “This is the homepage!”, задайте для него путь по умолчанию ("/").


    import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
// import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
// import {hashHistory} from 'react-router-dom';
import App from './App';
import View1 from './views/View1';
import View2 from './views/View2';

// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render (

        <Router history={hashHistory}>
            <Route path="/" component={App}/>
            <Route path="/View1" component={View1}/>
            <Route path="/View2" component={View2}/>
        </Router>, document.getElementById ('root'));



