import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {setCategory} from '../../actions/index';

import CategoriesBtns from '../DropDownItems/CategoriesBtns';
import SearchInput from '../DropDownItems/SearchInput';

export const CheckBoxBluePrint = props => {
    const isChecked = props.id === props.selectedId;
    const dispatch = useDispatch();
    const renderInput = props => {
        switch(props.value){
            case 'Random':
                return(
                    <form className="checkboxContainer__form">
                        <input
                            id={`checkbox_${props.id}`}
                            onClick={() => dispatch(setCategory('random'))}
                            className={props.className}
                            checked= {isChecked}
                            onChange={e => props.onSelect(props.id)}
                            type= {props.type}
                            value={props.value}
                        />{props.value}
                    </form>
                )
            case 'Category':
                return(
                    <form className="checkboxContainer__form">
                            <input 
                                id={`checkbox_${props.id}`}
                                onChange={e => props.onSelect(props.id)}
                                className={props.className} 
                                checked={isChecked}
                                type={props.type} 
                                value={props.value}/> {props.value}
                        <div>{isChecked && <CategoriesBtns/>}</div>
                    </form>
                )
            case 'Search':
                return (    
                    <div>
                        <form className="checkboxContainer__form">
                            <input 
                                id={`checkbox_${props.id}`}
                                onChange={e => props.onSelect(props.id)}
                                className="checkboxContainer__form-item" 
                                checked={isChecked}
                                type={props.type}
                                value={props.value}/>{props.value} 
                        </form>
                        {isChecked && <SearchInput/>}
                    </div>
                )
            default:
                return  <h1>...Loading...</h1>
        }
    }

    CheckBoxBluePrint.propTypes = {
        type: PropTypes.string.isRequired,
        onSelect : PropTypes.func.isRequired,
        selectedId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        className: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    };

    return renderInput(props);
}