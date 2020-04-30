const INITIAL_STATE= []

export default (state = INITIAL_STATE,action) => {
    switch(action.type){
        case 'FETCH_RANDOM':
            return action.payload;
        case 'FETCH_ANIMAL':
            return action.payload;
         case 'FETCH_CAREER':
             return action.payload;  
         case 'FETCH_CELEBRITY':
             return action.payload;
        case 'FETCH_DEV':
            return action.payload;            
        default:
            return state;   
    };
};