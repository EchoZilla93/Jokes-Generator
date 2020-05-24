import {
    // getCategoryJoke,
    setCategory,
    addFavorite,
    removeFavorite,
    initFavoriteJokes
} from './index';
// import * as axios from 'axios';

jest.mock('axios')

describe('actions', () => {

    it('initFavoriteJokes', () => {
        const props = [{
            categories: [],
            created_at: '2020-01-05 13:42:20.568859',
            icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
            id: 'kv95RRh0SCie8_8q4B7hRA',
            updated_at: '2020-01-05 13:42:20.568859',
            url: 'https://api.chucknorris.io/jokes/kv95RRh0SCie8_8q4B7hRA',
            value: 'The sun doesnt shine on Chuck Norris. If it did well you know when a solar eclipse is coming.'
        }];

        expect(initFavoriteJokes(props)).toEqual({
            type: 'INIT_FAV_JOKES',
            payload: {
                jokes: props
            }
        });
    });

    it('removeFavorite', () => {
        const props = 'kv95RRh0SCie8_8q4B7hRA';

        expect(removeFavorite(props)).toEqual({
            type: 'REMOVE_FAVORITE',
            payload: 'kv95RRh0SCie8_8q4B7hRA'
        });
    });

    it('addFavorite', () => {
        const props = 'kv95RRh0SCie8_8q4B7hRA';

        expect(addFavorite(props)).toEqual({
            type: 'ADD_FAVORITE',
            payload: 'kv95RRh0SCie8_8q4B7hRA'
        });
    });

    it('setCategory', () => {
        const props = 'animal';

        expect(setCategory(props)).toEqual({
            type: 'SET_CATEGORY',
            payload: 'animal'
        });
    });

    // it('getCategoryJoke', () => {
    //     const data = {
    //         categories: ['animal'],
    //         created_at: '2020-01-05 13:42:20.568859',
    //         icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    //         id: 'kv95RRh0SCie8_8q4B7hRA',
    //         updated_at: '2020-01-05 13:42:20.568859',
    //         url: 'https://api.chucknorris.io/jokes/kv95RRh0SCie8_8q4B7hRA',
    //         value: 'The sun doesnt shine on Chuck Norris. If it did well you know when a solar eclipse is coming.'
    //     }
    //     const dispatch = jest.fn().mockImplementation(action => action);
    //     axios.get.mockImplementation(() => Promise.resolve("Hello world"));
    //     getCategoryJoke('random')(dispatch);
    //     expect(getCategoryJoke('animal')).toEqual({
    //         type: 'FETCH_JOKE',
    //         payload: []
    //     })
    // });
})