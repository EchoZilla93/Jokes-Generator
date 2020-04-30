import React,{useState} from 'react';
import {useDispatch} from 'react-redux';

import {getAnimalJoke,getCareerJoke,getCelebrityJoke,getDevJoke} from '../actions/index';



const CategoriesBtns = () => {
    const dispatch = useDispatch();
    const [btnClick,setBtnClick] = useState(false);

   //Btn Controllers:
   const onAnimalClick = () => dispatch(getAnimalJoke());
   const onCareerClick = () => dispatch(getCareerJoke());
   const onCelebrityClick = () => dispatch(getCelebrityJoke());
   const onDevClick = () => dispatch(getDevJoke());

    return(
        <span className="btnContainer">
            <button 
            className={`btnContainer__btn animal  ${btnClick? 'active': 'nonActive'}`} 
            onClick={onAnimalClick}>animal</button>
            <button 
            className={`btnContainer__btn career ${btnClick? 'active': 'nonActive'}`} 
            onClick={onCareerClick}>career</button>
            <button 
            className={`btnContainer__btn ${btnClick? 'active': 'nonActive'}`} 
            onClick={onCelebrityClick}>celebrity</button>
            <button 
            className={`btnContainer__btn ${btnClick? 'active': 'nonActive'}`} 
            onClick={onDevClick}>dev</button>
        </span>
    );
};

export default CategoriesBtns;