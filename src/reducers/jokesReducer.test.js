import { jokeReducer as reducer } from './jokesReducer';

describe('jokeReducer', () => {
    it('FETCH_JOKE - adding the data to joke reducer', () => {
        const initialState = {
            jokes: [],
            favoriteJokes: []
        };

        const apiData = {
            categories: [],
            created_at: '2020-01-05 13:42:20.568859',
            icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
            id: 'kv95RRh0SCie8_8q4B7hRA',
            updated_at: '2020-01-05 13:42:20.568859',
            url: 'https://api.chucknorris.io/jokes/kv95RRh0SCie8_8q4B7hRA',
            value: 'The sun doesnt shine on Chuck Norris. If it did well you know when a solar eclipse is coming.'
        };

        const request = {
            type: 'FETCH_JOKE',
            payload: apiData
        };

        const result = {
            jokes: [apiData],
            favoriteJokes: []
        };

        expect(reducer(initialState, request)).toEqual(result);
    })

    it('ADD_FAVORITE - adding the data to joke reducer', () => {

        const apiData = {
            categories: [],
            created_at: '2020-01-05 13:42:20.568859',
            icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
            id: 'kv95RRh0SCie8_8q4B7hRA',
            updated_at: '2020-01-05 13:42:20.568859',
            url: 'https://api.chucknorris.io/jokes/kv95RRh0SCie8_8q4B7hRA',
            value: 'The sun doesnt shine on Chuck Norris. If it did well you know when a solar eclipse is coming.'
        };

        const initialState = {
            jokes: [apiData],
            favoriteJokes: []
        };

        const request = {
            type: 'ADD_FAVORITE',
            payload: 'kv95RRh0SCie8_8q4B7hRA'
        };

        const result = {
            jokes: [apiData],
            favoriteJokes: [apiData]
        };

        expect(reducer(initialState, request)).toEqual(result);
    });

    it('REMOVE_FAVORITE - removing the data to joke reducer', () => {

        const apiData = {
            categories: [],
            created_at: '2020-01-05 13:42:20.568859',
            icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
            id: 'kv95RRh0SCie8_8q4B7hRA',
            updated_at: '2020-01-05 13:42:20.568859',
            url: 'https://api.chucknorris.io/jokes/kv95RRh0SCie8_8q4B7hRA',
            value: 'The sun doesnt shine on Chuck Norris. If it did well you know when a solar eclipse is coming.'
        };

        const initialState = {
            jokes: [],
            favoriteJokes: [apiData]
        };

        const request = {
            type: 'REMOVE_FAVORITE',
            payload: 'kv95RRh0SCie8_8q4B7hRA'
        };

        const result = {
            jokes: [],
            favoriteJokes: []
        };

        expect(reducer(initialState, request)).toEqual(result);
    });

    it('INIT_FAV_JOKES - getting the fav jokes from local storage', () => {

        const localStorageData = {
            categories: [],
            created_at: '2020-01-05 13:42:20.568859',
            icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
            id: 'kv95RRh0SCie8_8q4B7hRA',
            updated_at: '2020-01-05 13:42:20.568859',
            url: 'https://api.chucknorris.io/jokes/kv95RRh0SCie8_8q4B7hRA',
            value: 'The sun doesnt shine on Chuck Norris. If it did well you know when a solar eclipse is coming.'
        };

        const initialState = {
            jokes: [],
            favoriteJokes: []
        };

        const request = {
            type: 'INIT_FAV_JOKES',
            payload: {
                jokes: [localStorageData]
            }
        };

        const result = {
            jokes: [],
            favoriteJokes: [localStorageData]
        };

        expect(reducer(initialState, request)).toEqual(result);
    });
})