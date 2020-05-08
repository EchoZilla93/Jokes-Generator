import React from 'react';
import{useSelector} from 'react-redux';
import PropTypes from 'prop-types';

import './favoriteCard.scss';

export const FavoriteCardBluePrint = props =>{

    const state = useSelector(state => state.favorite);
    console.log(state);

    FavoriteCardBluePrint.propType = {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        updateInfo:PropTypes.number.isRequired
    }
    
    return(
        <div className="favoriteCard">
            <div className="favoriteCard__status"><i className="far fa-heart heart"></i></div>
            <div className="favoriteCard__staticImage"><i className="far fa-comment-dots static"></i></div>
            <div className="favoriteCard__mainContent">
                <h6 className="favoriteCard__ID">ID: <a href='/'>{state.id}</a></h6>
                <div className="textcontent"><p>{state.favJoke}</p></div>
            </div>
            <div className="favoriteCard__updateInfo">
                <p className="updateInfo">Last Update:{state.update
                } hours ago</p>
            </div>
        </div>
    )
}

export default FavoriteCardBluePrint;