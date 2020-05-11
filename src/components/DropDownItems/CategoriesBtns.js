import React/*,{useState}*/ from 'react';
import {useDispatch} from 'react-redux';

import {setCategory} from '../../actions/index';
import './dropDownStyles.scss';



export const CategoriesBtns = () => {
   //LATER: const [activeBtn,setActiveBtn] = useState(false);

    const dispatch = useDispatch();


    const setJokeCategory = (e , value) => {
        e.preventDefault();
        if(value === 'animal'){
            document.querySelector('.animal').style.background = '#F8F8F8';
            document.querySelector('.animal').style.color = 'black';
        }else if(value === 'career'){
            document.querySelector('.career').style.background = '#F8F8F8';
            document.querySelector('.career').style.color = 'black';
        }else if(value === 'celebrity'){
            document.querySelector('.celebrity').style.background = '#F8F8F8';
            document.querySelector('.celebrity').style.color = 'black';
        }else if (value === 'dev'){
            document.querySelector('.dev').style.background = '#F8F8F8';
            document.querySelector('.dev').style.color = 'black';
        };
        dispatch(setCategory(value));
    }

    return(
        <div className="btnContainer">
            <button 
            className={'btnContainer__btn animal '} 
            onClick={e => setJokeCategory(e, 'animal')}>animal</button>
            <button 
            className={`btnContainer__btn career`} 
            onClick={e => setJokeCategory(e, 'career')}>career</button>
            <button 
            className={`btnContainer__btn celebrity`} 
            onClick={e => setJokeCategory(e, 'celebrity')}>celebrity</button>
            <button 
            className={`btnContainer__btn dev`} 
            onClick={e => setJokeCategory(e, 'dev')}>dev</button>
        </div>
    );
};

export default CategoriesBtns;