// Создайте React компонент, который имеет два свойства(props) типа number  и
// свойство mode типа boolean. В зависимости от значения свойства mode(true/false) компонент
// должен выводить на экран либо сумму свойств типа number,
//     либо результат их конкатенации.

    import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App 	summand1="5" summand2="3" color="green" fontSize="14px"/>, document.getElementById('root'));
// registerServiceWorker();
