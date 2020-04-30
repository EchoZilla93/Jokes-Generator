import React from 'react';
import {useDispatch} from 'react-redux';

import {getRandomJoke} from '../actions/index';

const RandomBoxSelection = () => {
    const dispatch = useDispatch();
    return(
        <div className="randomChekboxcantainer">
            <form className="randomChekboxcantainer__label">
                    <input onClick={()=> dispatch(getRandomJoke())} className="randomChekboxcantainer__form-item" type="checkbox" name="random" value="Random"/>Random
            </form>
        </div>
    )
}

export default RandomBoxSelection;