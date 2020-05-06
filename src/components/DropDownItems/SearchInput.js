import React from 'react';
import {useDispatch} from 'react-redux';

import {setCategory} from '../../actions/index';
import './dropDownStyles.scss';

export const SearchInput = () => {
    const dispatch = useDispatch();

    const setSpecificCategory = value =>{
        dispatch(setCategory(value));
    };

    return (
        <div className="searchInput">
            <input 
                className="searchInput__field" 
                type="text" 
                placeholder="Free text search..." 
                onChange={e => setSpecificCategory(e.target.value)}/>
        </div>
    )
}

export default SearchInput;