import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCategory } from '../../actions';
import './dropDownStyles.scss';

export const CategoriesBtns = () => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.jokeCategoryToSearch);

    useEffect(() => {
        dispatch(setCategory('animal'));
    }, []);

    return (
        <div className="btnContainer">
            <button
                className={`btnContainer__btn animal ${category === 'animal' && 'active'}`}
                onClick={() => dispatch(setCategory('animal'))}>animal</button>
            <button
                className={`btnContainer__btn career ${category === 'career' && 'active'}`}
                onClick={() => dispatch(setCategory('career'))}>career</button>
            <button
                className={`btnContainer__btn celebrity ${category === 'celebrity' && 'active'}`}
                onClick={() => dispatch(setCategory('celebrity'))}>celebrity</button>
            <button
                className={`btnContainer__btn dev ${category === 'dev' && 'active'}`}
                onClick={() => dispatch(setCategory('dev'))}>dev</button>
        </div>
    );
};

export default CategoriesBtns;