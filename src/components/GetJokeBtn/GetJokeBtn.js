import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getCategoryJoke} from '../../actions';
import {
    multipleJokesExist,
    getJoke,
    getMultipleJokes
} from '../../selectors/Jokes';

import JokeCard from '../JokeCard/JokeCard';
import './getJokeBtnStyles.scss';

const GetJokeBtn = () =>{
    const dispatch = useDispatch();
    const [card,setCard] = useState(false);
    //States:
    const joke = useSelector(state => getJoke(state));
    const jokes = useSelector(state => getMultipleJokes(state));
    const category = useSelector(state => state.jokeCategoryToSearch);
    const multipleJokes = useSelector(state => multipleJokesExist(state));


    const onGetJokeClick = () =>{
       dispatch(getCategoryJoke(category));
       setCard(true);
    }

    return(
        <div className="getJokeBtnContainer">
            <button onClick={onGetJokeClick} className="getJokeBtnContainer__item">Get a joke</button>
            {card && !multipleJokes && <JokeCard
                        id={joke.id}
                        joke={joke.value}
                        update={joke.updated_at}
                        category={joke.categories}
                    />}
            {card && multipleJokes && <div>
                {jokes.map(data => (
                    <JokeCard
                    key={data.id}
                    id={data.id}
                    joke={data.value}
                    update={data.updated_at}
                    category={data.categories}
                    />
                ))}
            </div>}
        </div> 
    )
}

export default GetJokeBtn;