export const setFavoriteJoke = joke => {
     if (JSON.parse(localStorage.getItem('favoriteJokes')) != null){
        let jokes = JSON.parse(localStorage.getItem('favoriteJokes'));
        jokes.push(joke);
        localStorage.setItem('favoriteJokes', JSON.stringify(jokes));
     }else{
         let jokes = [joke];
         localStorage.setItem('favoriteJokes', JSON.stringify(jokes));
     }
};

export const getFavoriteJokes = () => {
    return JSON.parse(localStorage.getItem('favoriteJokes'));
};