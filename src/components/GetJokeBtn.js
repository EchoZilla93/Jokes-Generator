import React,{useState} from 'react';
import {useSelector} from 'react-redux';

import JokeCard from './JokeCard';

const GetJokeBtn = () =>{
    const [card,setCard] = useState(false);
    const jokes = useSelector(state => state.jokes);
    console.log(jokes)
    const onGetJokeClick = () =>{
        setCard(true);
    }
    return(
        <div className="getJokeBtnContainer">
            <button onClick={onGetJokeClick} className="getJokeBtnContainer__item">Get a joke</button>
            {card && <JokeCard
                        id={jokes.data.id}
                        joke={jokes.data.value}
                        update={jokes.data.updated_at}
                        category={jokes.data.categories}
                    />}
        </div> 
    )
}

//<i class="far fa-heart"></i>

export default GetJokeBtn;