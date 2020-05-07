import React from 'react';

import PropTypes from 'prop-types';

import './favoriteCard.scss';

export const FavoriteCard = props =>{

    FavoriteCard.propType = {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        updateInfo:PropTypes.number.isRequired
    }
    
    return(
        <div className="favoriteCard">
            <div className="favoriteCard__status"><i className="far fa-heart heart"></i></div>
            <div className="favoriteCard__staticImage"><i className="far fa-comment-dots static"></i></div>
            <div className="favoriteCard__mainContent">
                <h6 className="favoriteCard__ID">ID: <a href='/'>reference</a></h6>
                <div className="textcontent"><p>Joke text content</p></div>
            </div>
            <div className="favoriteCard__updateInfo">
                <p className="updateInfo">Last Update: 123456 hours ago</p>
            </div>
        </div>
    )
}

export default FavoriteCard;