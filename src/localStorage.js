export const setFavoriteJoke = joke => {
    if (JSON.parse(localStorage.getItem('favoriteJokes')) != null) {
        let jokes = JSON.parse(localStorage.getItem('favoriteJokes'));
        jokes.push(joke);
        localStorage.setItem('favoriteJokes', JSON.stringify(jokes));
    } else {
        let jokes = [joke];
        localStorage.setItem('favoriteJokes', JSON.stringify(jokes));
    }
};

export const getFavoriteJokes = () => {
    return JSON.parse(localStorage.getItem('favoriteJokes'));
};

export const removeFavoriteJoke = jokeToRemove => {
    let jokes = JSON.parse(localStorage.getItem('favoriteJokes'));
    let result = jokes.filter(joke => joke.id !== jokeToRemove.id);
    localStorage.setItem('favoriteJokes', JSON.stringify(result));
}

export const checkIfLiked = id => {
    let jokes = JSON.parse(localStorage.getItem('favoriteJokes'));
    if (jokes) {
        let result = jokes.find(joke => joke.id === id);
        if (result) return true;
        else return false;
    } else return false;
}