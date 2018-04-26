import { combineReducers } from 'redux';

import list from './list';
import detail from './detail';
import user from './user';

let reducer = combineReducers({

    list,
    detail,
    user

});

export default reducer;