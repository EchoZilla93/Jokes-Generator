import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import './jokeCardStyles.scss';
import { addFavorite } from '../../actions';

export const JokeCard = props => {
    const [favStatus,setFavStatus] = useState(false);
    const dispatch = useDispatch();
    const favoriteClick = () =>{
        setFavStatus(!favStatus);
        if(favStatus){
            document.getElementById('icon').classList.add('far');
            document.getElementById('icon').classList.add('fa-heart');
        }else{
            document.getElementById('icon').classList.add('fas');
            document.getElementById('icon').classList.add('fa-heart');
        }
    }
    return (
        <div className="jokeCardContainer">'
            <div className="jokeCardContainer__icons">
                <div className="jokeCardContainer__static"><i className="far fa-comment-dots"></i></div>
                <button onClick={() => dispatch(addFavorite(props.id))}
                    className="jokeCardContainer__likeBtn">
                    <i onClick={favoriteClick} className="far fa-heart" id="icon"></i>
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
    update: PropTypes.number,
    category: PropTypes.array.isRequired,
    favorite: PropTypes.bool
};

export default JokeCard;