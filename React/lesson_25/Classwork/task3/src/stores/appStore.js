/**
 * Created by sergiiivanchenko on 11/07/2017.
 */

import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

class AppStore extends EventEmitter {
    constructor() {
        super ();
        this.result = 0;
    }

    sum(arg1, arg2) {
        this.result = +arg1 + +arg2;
        this.emit ('RESULT-RECEIVED')
    }

    dividing(arg1, arg2) {
        this.result = +arg1 / +arg2;
        this.emit ('RESULT-RECEIVED')
    }

    multiplication(arg1, arg2) {
        this.result = +arg1 * +arg2;
        this.emit ('RESULT-RECEIVED')
    }

    substract(arg1, arg2) {
        this.result = +arg1 - +arg2;
        this.emit ('RESULT-RECEIVED')
    }

    getResult() {
        return this.result;
    }

    handlerActions(action) {
        // console.log('AppStore receive action: ', action );
        switch (action.type) {
            case "GET-SUM": {
                this.sum (action.arg1, action.arg2);
                break;
            }
            case "GET-DIVIDING": {
                this.dividing (action.arg1, action.arg2);
                break;
            }
            case "GET-SUBSTRACT": {
                this.substract (action.arg1, action.arg2);
                break;
            }
            case "GET-MULTIPLICATION": {
                this.multiplication (action.arg1, action.arg2);
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

