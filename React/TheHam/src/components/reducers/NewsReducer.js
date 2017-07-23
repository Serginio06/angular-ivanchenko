// import {createStore, applyMiddleware} from 'redux';
// import {initialTaskList} from './../data/initialTaskList';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import thunk from 'redux-thunk';


export default function newsStore(store = [''], action) {



    if ( action.type === "GET-INIT-NEWS" ) {
        console.log('ACTIION GET-INIT-NEWS payload=',action.payload);
        let firstEight = action.payload.filter((item,index)=> {
            return index <= 7;
        });
        return firstEight
    }

    if ( action.type === "GET-MORE-NEWS" ) {
        console.log('ACTIION GET-MORE-NEWS=',action.payload);
        let firstEight = action.payload.filter((item,index)=> {
            return (index > 7 && index <= 15);
        });
        return firstEight
    }

    return store;
}


// const taskStore = createStore (inputData,composeWithDevTools(applyMiddleware(thunk)));
//
// export default taskStore;


