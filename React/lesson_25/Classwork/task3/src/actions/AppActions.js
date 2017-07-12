/**
 * Created by sergiiivanchenko on 11/07/2017.
 */

import dispatcher from '../dispatcher';

export function changeDivStyle() {
    dispatcher.dispatch ({
        type: "CHANGE_DIV_STYLE",
        myMsg: "this is data emted with current action"
    })
}


export function sum(arg1, arg2) {
    dispatcher.dispatch ({
        type: 'GET-SUM',
        arg1: arg1,
        arg2: arg2
    })
}

export function dividing(arg1, arg2) {
    dispatcher.dispatch ({
        type: 'GET-DIVIDING',
        arg1: arg1,
        arg2: arg2
    })
}

export function substract(arg1, arg2) {
    dispatcher.dispatch ({
        type: 'GET-SUBSTRACT',
        arg1: arg1,
        arg2: arg2
    })
}

export function multiplication(arg1, arg2) {
    dispatcher.dispatch ({
        type: 'GET-MULTIPLICATION',
        arg1: arg1,
        arg2: arg2
    })
}

