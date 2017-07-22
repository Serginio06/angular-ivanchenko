/**
 * Created by sergiiivanchenko on 14/07/2017.
 */

import {combineReducers} from 'redux';
import todoStore from './TodoReducer';
import aboutStore from './AboutReducer';
import usersStore from './UserReducer';
import usersFilterStore from './UserFilterReducer'



// export default combineReducers({
//     todoStore,
//     aboutStore
// })//
//
//
export default combineReducers({
    usersStore,
    usersFilterStore
})






