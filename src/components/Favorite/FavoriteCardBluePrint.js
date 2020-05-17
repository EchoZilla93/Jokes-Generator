import React, {useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import {getFavoriteJokes} from '../../localStorage';

import './favoriteCard.scss';

export const FavoriteCardBluePrint = () =>{
    const [favoriteJokes, setFavoriteJokes] = useState([]);

    FavoriteCardBluePrint.propType = {
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        updateInfo:PropTypes.number.isRequired
    };

    useEffect(() => {
        setFavoriteJokes(getFavoriteJokes());
    },[]);
    
    return(
        <div className="favoriteCard">
            {/* <div className="favoriteCard__status"><i className="far fa-heart heart"></i></div>
            <div className="favoriteCard__staticImage"><i className="far fa-comment-dots static"></i></div>
            <div className="favoriteCard__mainContent">
                <h6 className="favoriteCard__ID">ID: <a href='/'>1</a></h6>
                <div className="textcontent"><p>2</p></div>
            </div>
            <div className="favoriteCard__updateInfo">
                <p className="updateInfo">Last Update:hours ago</p>
            </div> */}
              {favoriteJokes.map(joke => (
                   <p>{joke.favJoke}</p>
            ))}
        </div>
    )
}

export default FavoriteCardBluePrint;