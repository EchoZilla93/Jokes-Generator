import React, {useState} from 'react';
import {checkboxes} from '../../helpers/Helpers';

import {CheckBoxBluePrint} from './CheckBoxBluePrint';
import './checkBoxStyles.scss'

const CheckBoxRender = () => {
    const [selectedId, setSelectedId] = useState(1);
    const changeHandler = (id) => {
        setSelectedId(id);
    };
    
    return(
        <div>
            <div className="checkboxContainer">
                {checkboxes.map(checkBox => (
                    <CheckBoxBluePrint
                        key={checkBox.id}
                        type= {'checkbox'}
                        onSelect = {changeHandler}
                        selectedId = {selectedId}
                        {...checkBox}
                    />
                ))}
            </div>
        </div>
    )
}

export default CheckBoxRender;