import {
    setFavoriteJoke,
    removeFavoriteJoke
} from '../localStorage';

const INITIAL_STATE = {
    jokes: [],
    favoriteJokes: []
}


export default (state = INITIAL_STATE, action) => {
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
            jokes[jokeIndex].favorite = true;
            //adding favorite joke to localStorage
            const favoriteJoke = jokes[jokeIndex];
            setFavoriteJoke(favoriteJoke);

            //return reducer
            return { ...state, jokes: jokes, favoriteJokes: state.favoriteJokes.concat(favoriteJoke) };
        case 'REMOVE_FAVORITE':
            //removing favorite joke from state
            const favoriteJokes = state.favoriteJokes;
            const index = favoriteJokes.findIndex(joke => joke.id === action.payload);
            //removing favorite joke from localStorage
            removeFavoriteJoke(favoriteJokes[index]);

            favoriteJokes.splice(index, 1);

            return { ...state, favoriteJokes: favoriteJokes }
        case 'INIT_FAV_JOKES':
            return { ...state, favoriteJokes: action.payload.jokes }
        default:
            return state;
    };
};