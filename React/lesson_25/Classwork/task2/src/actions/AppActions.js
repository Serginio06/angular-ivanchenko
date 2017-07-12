/**
 * Created by sergiiivanchenko on 11/07/2017.
 */

import dispatcher from '../dispatcher';


export function startTimer() {
    dispatcher.dispatch({
        type:"START-TIMER"
    })
}
export function stopTimer() {
    dispatcher.dispatch({
        type:"STOP-TIMER"
    })
}
export function restartTimer() {
    dispatcher.dispatch({
        type:"RESET-TIMER"
    })
}


