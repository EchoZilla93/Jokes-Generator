import React from 'react';

const JokeCard = props => {
    return(
        <div className="jokeCardContainer">
            <div className="jokeCardContainer__mainContent">
                <h6 className="joke-ref">ID: <a href="/">www.sample.com</a></h6>
                <p className="jokeCardContainer__mainContent joke-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
            </div>
            <div className="jokeCardContainer__updatedate-category">
                <p>Last Update: 2427 hours ago</p>
                <div className="jokeCardContainer__updatedate-categoryIdent"></div>
            </div>
            </div>    
    );
};

export default JokeCard;