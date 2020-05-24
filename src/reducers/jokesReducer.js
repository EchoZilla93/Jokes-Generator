import {
    setFavoriteJoke,
    removeFavoriteJoke
} from '../localStorage';
export const INITIAL_STATE = {
    jokes: [],
    favoriteJokes: []
}


export const jokeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_JOKE':
            if (action.payload.total) {
                return { ...state, jokes: action.payload.result };
            } else {
                return state = { ...state, jokes: [action.payload] };
            }
        case 'ADD_FAVORITE':
            //adding favorite joke to reducer
            const jokes = state.jokes;
            const jokeIndex = jokes.findIndex(joke => joke.id === action.payload);
            //adding favorite joke to localStorage
            const favoriteJoke = jokes[jokeIndex];
            setFavoriteJoke(favoriteJoke);

            //return reducer
            return { ...state, favoriteJokes: state.favoriteJokes.concat(favoriteJoke) };
        case 'REMOVE_FAVORITE':
            //removing favorite joke from localStorage
            const favoriteJokes = state.favoriteJokes;
            let index = favoriteJokes.findIndex(joke => joke.id === action.payload);
            removeFavoriteJoke(favoriteJokes[index]);
            favoriteJokes.splice(index, 1);

            return { ...state, favoriteJokes: favoriteJokes.filter(joke => joke.id !== action.payload) }
        case 'INIT_FAV_JOKES':
            return { ...state, favoriteJokes: action.payload.jokes }
        default:
            return state;
    };
};

export default jokeReducer;