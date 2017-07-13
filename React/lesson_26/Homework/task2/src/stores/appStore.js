import {createStore, applyMiddleware} from 'redux';
// import {initialTaskList} from './../data/initialTaskList';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';


function inputData(ToDos=[], action) {


    if ( action.type === "GET-TASKS-SUCCESS" ) {
        return action.payload;
    }

    if ( action.type === "SHOW-TASKS" ) {
        return ToDos;
    }

    if ( action.type === "ADD-TASK" ) {
        return [...ToDos, action.task];
    }

    if ( action.type === "DELETE-TASK" ) {

        let newToDo;
        newToDo = ToDos.filter((item,index,arr)=>{
            if (action.id !== index){
                return item;
            }
            return false;
        });

        return newToDo;
    }

    return ToDos;
}


const taskStore = createStore (inputData,composeWithDevTools(applyMiddleware(thunk)));

export default taskStore;


