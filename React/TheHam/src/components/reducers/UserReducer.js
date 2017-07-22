// import {createStore, applyMiddleware} from 'redux';
// import {initialTaskList} from './../data/initialTaskList';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import thunk from 'redux-thunk';


export default function usersStore(store=[], action) {

    if ( action.type === "GET-INIT-USERS" ) {
        console.log('ACTIION action.payload=',action.payload);
        return action.payload;
    }

    return store;
}


// const taskStore = createStore (inputData,composeWithDevTools(applyMiddleware(thunk)));
//
// export default taskStore;


