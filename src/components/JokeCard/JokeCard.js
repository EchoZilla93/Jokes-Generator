import React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import './jokeCardStyles.scss';
import {createFavorite} from '../../actions/index';

export const JokeCard = props => {

    JokeCard.propTypes = {
        id:PropTypes.string.isRequired,
        joke:PropTypes.string.isRequired,
        update:PropTypes.number,
        category:PropTypes.array.isRequired
    };

    const dispatch = useDispatch();
    
    const clickFavorite = () =>{
        const favorite = {
            id:props.id,
            favJoke:props.joke,
            update:props.update
        };
        dispatch(createFavorite(favorite));
        localStorage.setItem('test', "Hello World and Pisya")
        var result = localStorage.getItem('test');
        console.log(result);
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
                <p className="jokesCardInfoContainer__itemTime">
                    Last Update: {Math.round((new Date() - new Date(props.updatedAt)) / 1000 / 60 / 60)}   &nbsp;hours ago
                </p>
                {props.category && props.category.length > 0 && 
                    <div className="jokesCardInfoContainer__itemcategory">
                        {props.category}
                    </div>
                }
               </div>
            </div>  
    );
};

export default JokeCard;