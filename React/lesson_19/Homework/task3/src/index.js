// Создайте React компонент, который отображает на странице произвольный текст.
// Компонент должен иметь такие свойства: color и fontSize.
//     Установите на основе этих свойств стили для компонента.

    import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App 	summand1="5" summand2="3" color="green" fontSize="14px"/>, document.getElementById('root'));
// registerServiceWorker();
