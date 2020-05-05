export const multipleJokesExist = state => {
    return state &&
           state.jokes &&
           state.jokes.multipleJokes &&
           state.jokes.multipleJokes.total &&
           state.jokes.multipleJokes.total > 0;

}

export const getJoke = state => {
    return state &&
           state.jokes  &&
           state.jokes.joke;
}

export const getMultipleJokes = state => {
    return state &&
           state.jokes &&
           state.jokes.multipleJokes &&
           state.jokes.multipleJokes.result;
}