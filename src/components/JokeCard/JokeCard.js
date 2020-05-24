import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './jokeCardStyles.scss';
import { addFavorite, removeFavorite } from '../../actions';
import { checkIfLiked } from '../../localStorage'

export const JokeCard = props => {
    const dispatch = useDispatch();
    const [like, setLike] = useState(checkIfLiked(props.id));
    const favoriteJokes = useSelector(state => state.jokes.favoriteJokes);

    const setJoke = () => {
        if (like) {
            setLike(false)
            dispatch(removeFavorite(props.id));
        } else {
            setLike(true)
            dispatch(addFavorite(props.id));
        };
    };

    useEffect(() => {
        if (!checkIfLiked(props.id)) {
            setLike(false);
        }

    }, [favoriteJokes])

    return (
        <div className="jokeCardContainer">
            <div className="jokeCardContainer__icons">
                <div className="jokeCardContainer__static"><i className="far fa-comment-dots"></i></div>
                <button onClick={setJoke}
                    className="jokeCardContainer__likeBtn">
                    <i className={`${like ? 'fas' : 'far'} fa-heart`} id="icon"></i>
                </button>
            </div>
            <div className="jokeCardContainer__bodyContainer">
                <h6 className="jokeCardContainer__jokeID">ID: <a href={props.url}>{props.id}</a></h6>
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

JokeCard.propTypes = {
    id: PropTypes.string.isRequired,
    joke: PropTypes.string.isRequired,
    updatedAt: PropTypes.string,
    category: PropTypes.array.isRequired,
    favorite: PropTypes.bool
};

export default JokeCard;