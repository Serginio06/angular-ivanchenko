// import {createStore, applyMiddleware} from 'redux';
// import {initialTaskList} from './../data/initialTaskList';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import thunk from 'redux-thunk';


export default function aboutStore(state=[3,4,5,6,4], action) {

    if ( action.type === "ADD-NEW-RATE" ) {

        // console.log('action.payload= ', action.payload);
        return [...state,action.payload]
    }

    return state;
}


// const aboutReducer = createStore (store,composeWithDevTools(applyMiddleware(thunk)));
//
// export default taskStore;


