/**
 * Created by sergiiivanchenko on 11/07/2017.
 */

import dispatcher from '../dispatcher';

// export function changeDivStyle() {
//     dispatcher.dispatch({
//         type: "CHANGE_DIV_STYLE",
//         myMsg: "this is data emted with current action"
//     })
// }

export function addTask(task,status) {
    dispatcher.dispatch({
        type:'ADD-TASK',
        task:task,
        status:status
    })
}

export function deleteTask(arrId) {
    dispatcher.dispatch({
        type:'DELETE-TASK',
        arrId:arrId
    })
}
