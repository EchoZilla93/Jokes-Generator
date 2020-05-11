import React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import './jokeCardStyles.scss';
import {createFavorite} from '../../actions/index';

export const JokeCard = props => {

    JokeCard.propTypes = {
        id:PropTypes.number.isRequired,
        joke:PropTypes.string.isRequired,
        update:PropTypes.number.isRequired,
        category:PropTypes.string.isRequired
    };

    const dispatch = useDispatch();
    
    const clickFavorite = () =>{
        const favorite = {
            id:props.id,
            favJoke:props.joke,
            update:props.update
        };
        dispatch(createFavorite(favorite));
    }
    if(props.category === []){
        document.querySelector('.jokesCardInfoContainer__itemcategory').style.opacity = '0';
    }
    return(
        <div className="jokeCardContainer">
            <div className="jokeCardContainer__icons">
                    <div className="jokeCardContainer__static"><i className="far fa-comment-dots"></i></div>
                    <button onClick={clickFavorite} className="jokeCardContainer__likeBtn"><i className="far fa-heart"></i></button>
            </div>
                <div className="jokeCardContainer__bodyContainer">
                        <h6 className="jokeCardContainer__jokeID">ID: <a href="/">{props.id}</a></h6>
                        <p className="jokeCardContainer__joke-body">
                            {props.joke}
                        </p>
                </div>
            <div className="jokesCardInfoContainer">
                <p className="jokesCardInfoContainer__itemTime">Last Update: {props.update} hours ago</p>
                    <div className="jokesCardInfoContainer__itemcategory">{props.category}</div>
               </div>
            </div>  
    );
};

export default JokeCard;