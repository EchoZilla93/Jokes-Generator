import React from 'react';
import {useDispatch} from 'react-redux';

import {setCategory} from '../../actions/index';
import './dropDownStyles.scss';



const CategoriesBtns = () => {
    const dispatch = useDispatch();
    const setJokeCategory = (e , value) => {
        e.preventDefault();
        dispatch(setCategory(value));
    }

    return(
        <span className="btnContainer">
            <button 
            className={'btnContainer__btn animal '} 
            onClick={e => setJokeCategory(e, 'animal')}>animal</button>
            <button 
            className={`btnContainer__btn career`} 
            onClick={e => setJokeCategory(e, 'career')}>career</button>
            <button 
            className={`btnContainer__btn`} 
            onClick={e => setJokeCategory(e, 'celebrity')}>celebrity</button>
            <button 
            className={`btnContainer__btn`} 
            onClick={e => setJokeCategory(e, 'dev')}>dev</button>
        </span>
    );
};

export default CategoriesBtns;