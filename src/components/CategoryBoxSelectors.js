import React,{useState} from 'react';

import CategoriesBtns from './CategoriesBtns';

const CheckBoxSelectors = () => {
    const [btns,setBtns] = useState(false)
    return(
        <div className="checkboxContainer">
            <form className="checkboxContainer__form">
                <input onClick={() => setBtns(!btns)} className="checkboxContainer__form-item" type="checkbox" name="categories" value="Random"/> From categories
            </form>
            <div>{btns && <CategoriesBtns/>}</div>
        </div>
    )
}

export default CheckBoxSelectors ;

/*
</div>
*/