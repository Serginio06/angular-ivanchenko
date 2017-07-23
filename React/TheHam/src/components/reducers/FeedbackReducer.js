// import {createStore, applyMiddleware} from 'redux';
// import {initialTaskList} from './../data/initialTaskList';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import thunk from 'redux-thunk';


export default function feedbackStore(store = ['adsf'], action) {


    if (action.type === "GET-INIT-FEEDBACK") {

        return action.payload
    }

    if (action.type === "ADD-FEEDBACK") {
        // console.log ('ACTIION ADD-FEEDBACK payload=', action.payload);
        return [...store, action.payload]
    }

    if (action.type === "DELETE-FEEDBACK") {
        // console.log ('ACTIION DELETE-FEEDBACK payload=', action.payload);

        let newMsgArr;
        newMsgArr = store.filter((item,index,arr)=>{
            if (action.payload !== index){
                return item;
            }
            return false;
        });

        return newMsgArr;

        // return store
    }


    return store;
}



