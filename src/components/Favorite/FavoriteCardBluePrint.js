import React, {useState } from 'react';
import PropTypes from 'prop-types';
import { getFavoriteJokes } from '../../localStorage';

import './favoriteCard.scss';

export const FavoriteCardBluePrint = () => {
    const [favoriteJokes, setFavoriteJokes] = useState([]);
    /*const renderFavorite = favoriteJokes && favoriteJokes.map(joke => {
        return (
        <div className="favoriteCard">
            <div className="favoriteCard__status">
                <i className="far fa-heart heart"></i>
            </div>
            <div className="favoriteCard__staticImage">
                <i className="far fa-comment-dots static"></i>
                </div>
            <div className="favoriteCard__mainContent">
                <h6 className="favoriteCard__ID">ID: <a href='/'>{joke.id}</a></h6>
            <div className="textcontent">
                 <p>{joke.favJoke}</p>
                </div>
            </div>
            <div className="favoriteCard__updateInfo">
        <p className="updateInfo">Last Update: {joke.updated_at}hours ago</p>
            </div>
            </div>
            )})
*/
    return (
        <div>
           <div className="favoriteCard">
            <div className="favoriteCard__status">
                <i className="far fa-heart heart"></i>
            </div>
            <div className="favoriteCard__staticImage">
                <i className="far fa-comment-dots static"></i>
                </div>
            <div className="favoriteCard__mainContent">
                <h6 className="favoriteCard__ID">ID: <a href='/'>helloWorld</a></h6>
            <div className="textcontent">
                 <p>Chuckies joke</p>
                </div>
            </div>
            <div className="favoriteCard__updateInfo">
        <p className="updateInfo">Last Update: 200 hours ago</p>
            </div>
            </div>
        </div>
        
    );
};

FavoriteCardBluePrint.propType = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    updateInfo: PropTypes.number.isRequired
};

export default FavoriteCardBluePrint;