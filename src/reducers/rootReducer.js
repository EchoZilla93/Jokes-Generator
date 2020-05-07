import {combineReducers} from 'redux';

import jokesReducer from './jokesReducer';
import jokeCategoryReducer from './jokeCategoryReducer';
import {favoriteReducer} from './favoriteReducer';

const rootReducer = combineReducers({
    jokes:jokesReducer,
    jokeCategoryToSearch: jokeCategoryReducer,
    favorite: favoriteReducer
});

export default rootReducer;