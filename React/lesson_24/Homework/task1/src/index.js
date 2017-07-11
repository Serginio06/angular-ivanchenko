// Создайте приложение с тремя страницами:
//     * главной страницей, соответстующей React компоненту App, содержащему 2 кнопки (ListView,
// TableView), реализующие переход по соответственным путям (“/listView”, “tableView”)
// * страницей, отображающей массив users в виде списка(listView).  Для списка используйте
// свойства элементов массива users first_name и last_name
// * страницей, отображающей массив users в виде таблицы(tableView). Для 2nf,таблицы используйте
// свойства элементов массива users first_name, last_name и gender.



    import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
// import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
// import {hashHistory} from 'react-router-dom';
import App from './App';
// import View1 from './views/View1';
// import View2 from './views/View2';
import UserList from './views/UserList';
import UserTable from './views/UserTable';
import {users} from './data/users';

// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render (

        <Router history={hashHistory}>
            <Route path="/" component={App} users={users}/>
            {/*<Route path="/View1" component={View1} />*/}
            {/*<Route path="/View2" component={View2}/>*/}
            <Route path="/listView" component={UserList} users={users} />
            <Route path="/tableView" component={UserTable} users={users}/>
            <Route path="*" component={App}/>
        </Router>, document.getElementById ('root'));



