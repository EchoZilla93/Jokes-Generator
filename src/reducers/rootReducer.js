import {combineReducers} from 'redux';

import jokesReducer from './jokesReducer';
import jokeCategoryReducer from './jokeCategoryReducer';

const rootReducer = combineReducers({
    jokes:jokesReducer,
    jokeCategoryToSearch: jokeCategoryReducer
});

export default rootReducer;