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
    }


    addTask(task, status) {

        let obj = {
            id: Date.now ().toString ().slice (-4),
            task: task,
            status: status
        };

        this.tasks.push (obj);

        if (this.fullTaskList) {
            this.fullTaskList.push (obj);
        }
        this.emit ('TASK-LIST-CHANGED');

    }

    deleteTask(id) {
        this.tasks.splice (id, 1);
        this.emit ('TASK-LIST-CHANGED');
    }


    serachRequest(searchString) {
        this.fullTaskList = this.tasks;
        this.filteredTaskList = this.tasks.filter ((item, index, arr)=> {
            return item.task.indexOf (searchString) !== -1
        });

        this.tasks = this.filteredTaskList;
        this.emit ('TASK-LIST-CHANGED');

    }

    cleanSerachRequest() {
        if (this.fullTaskList) {
            this.tasks = this.fullTaskList;
            this.emit ('TASK-LIST-CHANGED');
            this.fullTaskList = '';
        }

    }

    getAllTasks() {
        return this.tasks;
    }


    handlerActions(action) {
        switch (action.type) {
            case "ADD-TASK": {
                this.addTask (action.task, action.status);
                break;
            }
            case "DELETE-TASK": {
                this.deleteTask (action.arrId);
                break;
            }
            case "SEARCH-REQUEST": {
                this.serachRequest (action.searchSting);
                break;
            }
            case "CLEAN-SEARCH-REQUEST": {
                this.cleanSerachRequest ();
                break;
            }
            default:
                console.log ('AppStore receive action: ', action);
        }
    }
}

const appStore = new AppStore ();
dispatcher.register (appStore.handlerActions.bind (appStore));

export default appStore;

