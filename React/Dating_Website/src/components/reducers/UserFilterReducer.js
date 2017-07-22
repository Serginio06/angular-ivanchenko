// import {createStore, applyMiddleware} from 'redux';
// import {initialTaskList} from './../data/initialTaskList';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

const initialState = '';

export default function usersFilterStore(state = initialState, action) {

    if (action.type === "SEARCH-USERS") {
        console.log ('ACTIION SEARCH-USERS');
        return action.payload;
    }
    return state;
}


// const taskStore = createStore (inputData,composeWithDevTools(applyMiddleware(thunk)));
//
// export default taskStore;


