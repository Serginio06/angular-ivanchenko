/**
 * Created by sergiiivanchenko on 11/07/2017.
 */

import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

class AppStore extends EventEmitter {
    constructor() {
        super ();
        this.counter = 0;
        this.timer = 0;
    }

    getCounterValue() {
        return this.counter;
    }

    startTimer() {
        console.log ('this.timer= ', this.timer);
        if (!this.timer) {
            this.timer = setInterval (()=> {
                this.counter++;
                this.emit ('COUNTER-CHANGED');
            }, 1000);
        }
    }

    stopTimer() {
        clearInterval (this.timer);
        this.timer = 0;
        console.log ('this.timer= ', this.timer);
    }

    resetTimer() {
        this.counter = 0;
        console.log ('this.timer= ', this.timer);
        this.emit ('COUNTER-CHANGED');
    }

    handlerActions(action) {
        // console.log('AppStore receive action: ', action );

        switch (action.type) {

            case "START-TIMER": {
                this.startTimer ();
                break;
            }
            case "STOP-TIMER": {
                this.stopTimer ();
                break;
            }
            case "RESET-TIMER": {
                this.resetTimer ();
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

