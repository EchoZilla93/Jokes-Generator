import React from 'react';

const JokeCard = props => {
    return(
        <div className="jokeCardContainer">
            <div className="jokeCardContainer__mainContent">
                <h6 className="joke-ref">ID: <a href="/">{props.id}</a></h6>
                <p className="jokeCardContainer__mainContent joke-body">
                    {props.joke}
                </p>
            </div>
            <div className="jokeCardContainer__updatedate-category">
                <p>Last Update: {props.update} hours ago</p>
    <div className="jokeCardContainer__updatedate-categoryIdent">{props.category}</div>
            </div>
            </div>    
    );
};

export default JokeCard;