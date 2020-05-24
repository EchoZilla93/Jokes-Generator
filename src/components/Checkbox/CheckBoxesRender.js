import React, {useState} from 'react';
import {checkboxes} from '../../helpers/Helpers';

import {CheckBoxBluePrint} from './CheckBoxBluePrint';
import './checkBoxStyles.scss'

export const CheckBoxRender = () => {
    const [selectedId, setSelectedId] = useState(1);
    const changeHandler = (id) => {
        setSelectedId(id);
    };
    
    return(
            <div className="checkboxContainer">
                {checkboxes.map(checkBox => (
                    <CheckBoxBluePrint
                        key={checkBox.id}
                        type= {'radio'}
                        onSelect = {changeHandler}
                        selectedId = {selectedId}
                        {...checkBox}
                    />
                ))}
            </div>
    );
};

export default CheckBoxRender;