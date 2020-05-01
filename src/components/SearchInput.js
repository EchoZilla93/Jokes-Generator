import React from 'react';
import {useDispatch} from 'react-redux';

import {getFreeTextJoke} from '../actions/index';

const SearchInput = () => {
    const dispatch = useDispatch();
    return (
        <div className="searchInput">
            <input onChange={dispatch(getFreeTextJoke())} className="searchInput__field" type="text" placeholder="Free text search..."/>
        </div>
    )
}

export default SearchInput;