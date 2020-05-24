import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { removeFavorite } from '../../actions';

import './favoriteCard.scss';

export const FavoriteCardBluePrint = () => {
    const dispatch = useDispatch();
    const favoriteJokes = useSelector(state => state.jokes.favoriteJokes);

    return (
        <Fragment>
            {favoriteJokes &&
                favoriteJokes.map(joke => (
                    <div key={joke.id}>
                        <div className="favoriteCard">
                            <div className="favoriteCard__status">
                                <i onClick={() => dispatch(removeFavorite(joke.id))} className="fas fa-heart" id="icon"></i>
                            </div>
                            <div className="favoriteCard__staticImage">
                                <i className="far fa-comment-dots static"></i>
                            </div>
                            <div className="favoriteCard__mainContent">
                                <h6 className="favoriteCard__ID">ID: <a href={joke.url}>{joke.id}</a></h6>
                                <div className="textcontent">
                                    <p>{joke.value}</p>
                                </div>
                            </div>
                            <div className="favoriteCard__updateInfo">
                                <p className="updateInfo">
                                    Last Update: {Math.round((new Date() - new Date(joke.updated_at)) / 1000 / 60 / 60)}   &nbsp;hours ago
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Fragment>
    )
};
export default FavoriteCardBluePrint;