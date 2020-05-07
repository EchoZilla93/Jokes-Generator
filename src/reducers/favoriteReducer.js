const INITIAL_STATE = [];

export const favoriteReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case 'CREATE_FAVORITE':
            return [...state,action.payload.favorite];
        default:
            return state    
    };
};