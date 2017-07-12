/**
 * Created by sergiiivanchenko on 11/07/2017.
 */

import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

class AppStore extends EventEmitter {
    constructor() {
        super ();
        this.divStyle = {
            bkgColor: 'red'
        }
    }


    changeDivStyle(Msg) {
        // console.log('Action come with message= ', Msg);
        this.divStyle.bkgColor = this.divStyle.bkgColor === 'red' ? 'blue' : 'red';
        this.emit ('styleChanged');
    }


    getDivStyle() {
        return this.divStyle;
    }


    handlerActions(action){
        // console.log('AppStore receive action: ', action );

        switch (action.type) {
            case "CHANGE_DIV_STYLE": {this.changeDivStyle(action.myMsg);
                break;}
            default: console.log('AppStore receive action: ', action );
        }

    }


}

const appStore = new AppStore ();
dispatcher.register(appStore.handlerActions.bind(appStore));

export default appStore;

