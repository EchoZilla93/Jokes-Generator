import jokeCategoryReducer from './jokeCategoryReducer';
import jokesReducer from './jokesReducer';
import {INITIAL_STATE} from './jokesReducer'

describe('Reducers',() => {
    it('Should return default state', () => {
        const newState = jokeCategoryReducer(undefined,{});
        expect(newState).toEqual('random');
    });
    it('Should return new state if receiving type', () => {
        const categoryArr = ['animal','career','celebrity','dev']
        const newState = jokeCategoryReducer(undefined,{
            type: 'SET_CATEGORY',
            payload:categoryArr
        });
        expect(newState).toEqual(categoryArr);
    });
    it('Should return default state', () => {
        const newState = jokeCategoryReducer(INITIAL_STATE,{});
        expect(newState).toEqual({jokes: [],favoriteJokes: []});
    });
    /*
    it('Should return new state if receiving type', () => {
        const 
    })
    */
});