import chuckNorisJokes from '../API/chuckNorisJokes';

export const getRandomJoke = () => 
        async dispatch => {
        const response = await chuckNorisJokes.get('/random');
        dispatch({type:'FETCH_RANDOM',payload:response});
    };

//CAtegories Action Creators
export const getAnimalJoke = () =>
            async dispatch =>{
            const response = await chuckNorisJokes.get('/random?category=animal');
            dispatch({type:'FETCH_ANIMAL',payload:response})
        };

export const getCareerJoke = () =>
        async dispatch =>{
        const response = await chuckNorisJokes.get('/random?category=career');
        dispatch({type:'FETCH_CAREER',payload:response})
    };

export const getCelebrityJoke = () =>
    async dispatch =>{
    const response = await chuckNorisJokes.get('/random?category=celebrity');
    dispatch({type:'FETCH_CELEBRITY',payload:response})
};   

export const getDevJoke = () =>
    async dispatch =>{
    const response = await chuckNorisJokes.get('/random?category=dev');
    dispatch({type:'FETCH_DEV',payload:response})
};   

