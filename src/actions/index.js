import chuckNorisJokes from '../API/chuckNorisJokes';

//Categories Action Creators:
export const getCategoryJoke = (value) => async dispatch =>{
            var response;
            switch(value){
                case 'random':
                    response = `/random`;
                    break;
                case 'career':
                case 'animal':
                case 'celebrity':
                case 'dev':
                    response = `/random?category=${value}`;
                    break;
                default:
                    response = `/search?query=${value}`;
                    break;
            }

            const result = await chuckNorisJokes.get(response);
            dispatch({type:'FETCH_JOKE', payload : result.data});
        };

export const setCategory = (value) => {
    return{
        type:'SET_CATEGORY',
        payload:value
    }
}

//FAVORITES:
export const createFavorite = favorite => {
    return{
        type: 'CREATE_FAVORITE',
        payload: {
            favorite
        }
    }
}