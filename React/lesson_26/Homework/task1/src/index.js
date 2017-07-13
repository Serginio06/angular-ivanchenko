// Создайте приложение todo List. Реализуйте следующее:
//     * Возможность удалять и добавлять элементы в список
// * Возможность выбирать режим отображения данных: таблица или список

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import taskStore from './stores/appStore'
import './style/index.css';
import App from './App';

ReactDOM.render (
    <Provider store={taskStore}>
        <App />
    </Provider>, document.getElementById ('root'));