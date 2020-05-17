import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryJoke } from '../../actions';

import JokeCard from '../JokeCard/JokeCard';
import './getJokeBtnStyles.scss';

export const GetJokeBtn = () => {
    const dispatch = useDispatch();
    const [card, setCard] = useState(false);
    //States:
    const jokes = useSelector(state => state.jokes.jokes);
    const category = useSelector(state => state.jokeCategoryToSearch);


    const onGetJokeClick = () => {
        dispatch(getCategoryJoke(category));
        setCard(true);
    }



    return (
        <div className="getJokeBtnContainer">
            <button onClick={onGetJokeClick} className="getJokeBtnContainer__item">Get a joke</button>
            {jokes && card &&
                jokes.map(joke => (
                    <JokeCard
                        key={joke.id}
                        id={joke.id}
                        joke={joke.value}
                        updatedAt={joke.updated_at}
                        category={joke.categories}
                        favorite={joke.favorite}
                    />
                ))}
        </div>
    )
}

export default GetJokeBtn;