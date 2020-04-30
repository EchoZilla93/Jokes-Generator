import chuckNorisJokes from '../API/chuckNorisJokes';

export const getRandomJoke = () => 
        async dispatch => {
        const response = await chuckNorisJokes.get('/random');
        dispatch({type:'FETCH_RANDOM',payload:response});
    };