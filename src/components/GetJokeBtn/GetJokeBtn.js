import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryJoke } from '../../actions';
import './getJokeBtnStyles.scss';

export const GetJokeBtn = () => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.jokeCategoryToSearch);

    const onGetJokeClick = () => {
        dispatch(getCategoryJoke(category));
    };

    return (
        <button onClick={onGetJokeClick} className="getJokeBtnContainer__item">Get a joke</button>
    );
};

export default GetJokeBtn;