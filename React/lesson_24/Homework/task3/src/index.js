// Создайте приложение с тремя страницами:
//     * главной страницей, соответстующей React компоненту App, содержащему 2 кнопки (ListView,
// TableView), реализующие переход по соответственным путям (“/listView”, “tableView”)
// * страницей, отображающей массив users в виде списка(listView).  Для списка используйте
// свойства элементов массива users first_name и last_name
// * страницей, отображающей массив users в виде таблицы(tableView). Для 2nf,таблицы используйте
// свойства элементов массива users first_name, last_name и gender.
//Задача 2
// Модицифицируйте код предыдущей задачи. Добавьте анимацию при переходе по путям, указанным в
// конфигурации маршрутизации приложения.
// Задача 3
// Модицифицируйте код предыдущей задачи. Реализуйте следующее:
// * При клике по каждому элементу списка происходит перенаправление на
// страницу “/tableView/:id” или “/listView/:id”, в зависимости от текущего пути приложения, где id –
// соответствующее свойтво id элемента списка или таблицы, по которому кликнул пользователь
// * На странице, на которую будет происходить перенаправление, должна отображаться инфомация об
// элементе массива users, id которого был передан в поисковой строке. Реализуйте передачу этой
// информации через query параметры.


import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
// import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
// import {hashHistory} from 'react-router-dom';
import App from './App';
import IDlistView from './views/IDlistView';
import IDtableView from './views/IDtableView';
import UserList from './views/UserList';
import UserTable from './views/UserTable';
import {users} from './data/users';

// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render (
    <Router history={hashHistory}>
        <Route path="/" component={App}></Route>
        {/*<Route path="/" component={App} users={users}/>*/}
        {/*<Route path="/View1" component={View1} />*/}
        {/*<Route path="/View2" component={View2}/>*/}
        <Route path="listView" component={UserList} users={users}></Route>
        <Route path="listView/:userID" component={ IDlistView} users={users}/>
        <Route path="tableView" component={UserTable} users={users}></Route>
        <Route path="tableView/:userID" component={IDtableView} users={users}/>

        {/*<Route path="*" component={App}/>*/}
    </Router>, document.getElementById ('root'));



