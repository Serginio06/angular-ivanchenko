/**
 * Created by sergiiivanchenko on 11/07/2017.
 */

import dispatcher from '../dispatcher';

export function changeDivStyle() {
    dispatcher.dispatch({
        type: "CHANGE_DIV_STYLE",
        myMsg: "this is data emted with current action"
    })
}

