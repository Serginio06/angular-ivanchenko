import {createStore} from 'redux';
import {initialTaskList} from './../data/initialTaskList'


function inputData(ToDos=initialTaskList, action) {


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


const taskStore = createStore (inputData,window.__REDUX_DEVTOOLS_EXTENSIO__ && window.__REDUX_DEVTOOLS_EXTENSIO__());

export default taskStore;


