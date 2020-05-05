const INITIAL_STATE = {
    joke:'',
    multipleJokes:{
        total: 0,
        result:[]
    }
} 

export default (state = INITIAL_STATE,action) => {
    switch(action.type){
       case 'FETCH_JOKE':
           if (action.payload.total){
               var searchJokes = {joke: '', multipleJokes:action.payload};
               return searchJokes;
           }else{
               var joke = {joke: action.payload ,multipleJokes:state.multipleJokes};
               return joke
           }        
        default:
            return state;   
    };
};