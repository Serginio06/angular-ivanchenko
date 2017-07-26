// import {createStore, applyMiddleware} from 'redux';
// import {initialTaskList} from './../data/initialTaskList';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import thunk from 'redux-thunk';

const initialState = 7;

export default function newsFilterStore(state = initialState, action) {

    if (action.type === "GET-MORE-NEWS") {
        // console.log('ACTIION GET-MORE-NEWS=',action.payload);

        return action.payload;
    }
    return state;
}


// const taskStore = createStore (inputData,composeWithDevTools(applyMiddleware(thunk)));
//
// export default taskStore;


