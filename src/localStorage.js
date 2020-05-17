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
    var jokes = JSON.parse(localStorage.getItem('favoriteJokes'));
    var result = jokes.filter(joke => joke.id !== jokeToRemove.id);
    console.log(result);
    localStorage.setItem('favoriteJokes', JSON.stringify(result));
}