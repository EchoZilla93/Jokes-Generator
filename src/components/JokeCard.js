import React from 'react';

const JokeCard = props => {
    return(
        <div className="jokeCardContainer">
            <div className="jokeCardContainer__mainContent">
                <button className="jokeCardContainer__mainContent-likeBtn"><i className="far fa-heart"></i></button>
                <h6 className="joke-ref">ID: <a href="/">{props.id}</a></h6>
                <p className="jokeCardContainer__mainContent joke-body">
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