// import {createStore, applyMiddleware} from 'redux';
// import {initialTaskList} from './../data/initialTaskList';
// import {composeWithDevTools} from 'redux-devtools-extension';
// import thunk from 'redux-thunk';


export default function newsStore(store = [''], action) {

    let newsToDisplay = 7;

    if ( action.type === "GET-INIT-NEWS" ) {

        // let news = action.payload.filter((item,index)=> {
        //     return index <= newsToDisplay;
        // });
        //
        // newsToDisplay = newsToDisplay + 8;
        //
        // return news
        return action.payload
    }

    // if ( action.type === "GET-MORE-NEWS" ) {
    //     console.log('ACTIION GET-MORE-NEWS=',action.payload);
    //     console.log('newsToDisplay=', newsToDisplay);
    //
    //     let news = action.payload.filter((item,index)=> {
    //         return index <= newsToDisplay;
    //         // return (index > 7 && index <= 15);
    //     });
    //     newsToDisplay += 8;
    //
    //     console.log('news= ', news);
    //
    //     return news
    // }

    return store;
}



