import React,{useState} from 'react';

import SearchInput from './SearchInput';

const Search = () => {
    const [input,setInput] = useState(false);
    return(
            <div className="checkboxContainer">
                <form className="checkboxContainer__label">
                    <input onClick={() => setInput(!input)} className="checkboxContainer__form-item" type="checkbox" name="search" value="Random"/>Search
                </form>
                {input && <SearchInput/>}
            </div>
    )
}

export default Search;