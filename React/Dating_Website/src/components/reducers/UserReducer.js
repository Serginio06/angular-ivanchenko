// import {createStore, applyMiddleware} from 'redux';
// import {initialTaskList} from './../data/initialTaskList';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import thunk from 'redux-thunk';


export default function usersStore(state =['fff'], action) {

    if ( action.type === "GET-INIT-NEWS" ) {
        console.log('ACTIION action.payload=',action.payload);
        return action.payload;
    }

    return state;
}


// const taskStore = createStore (inputData,composeWithDevTools(applyMiddleware(thunk)));
//
// export default taskStore;


