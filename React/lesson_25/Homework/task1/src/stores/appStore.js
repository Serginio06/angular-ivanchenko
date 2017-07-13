/**
 * Created by sergiiivanchenko on 11/07/2017.
 */

import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';
import {tasks} from './../data/initialTaskList';

class AppStore extends EventEmitter {
    constructor() {
        super ();
        this.tasks = tasks;
        // this.divStyle = {
        //     initialTaskList: 'red'
        // }
    }


    addTask(task,status) {
        // console.log('Action come with message= ', Msg);
        // console.log('add task. name/status= ', name + '/'+status);
        let obj = {
            id: Date.now ().toString ().slice (-4),
            task: task,
            status: status

        };

        this.tasks.push(obj);
        this.emit ('TASK-LIST-CHANGED');
    }
    
    deleteTask(id){
        // console.log('delelte task', id);
        this.tasks.splice(id,1);
        // console.log('this.initialTaskList= ', this.initialTaskList);
        this.emit ('TASK-LIST-CHANGED');
    }


    getAllTasks() {
        // console.log('appStore this.initialTaskList= ', this.initialTaskList);
        return this.tasks;
    }


    handlerActions(action){
        // console.log('AppStore receive action: ', action );

        switch (action.type) {
            case "ADD-TASK": {this.addTask(action.task,action.status);
                break;}
            case "DELETE-TASK": {this.deleteTask(action.arrId);
                break;}
            default: console.log('AppStore receive action: ', action );
        }

    }


}

const appStore = new AppStore ();
dispatcher.register(appStore.handlerActions.bind(appStore));

export default appStore;

