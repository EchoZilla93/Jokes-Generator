import React from 'react';

import Head from '../Header/Head';
import CheckBoxesRender from '../Checkbox/CheckBoxesRender';
import GetJokeBtn from '../GetJokeBtn/GetJokeBtn';
import JokeList from '../JokeList/JokeList';

export const MainSection = (props) => {
    return (
        <div className={props.className}>
            <Head />
            <CheckBoxesRender />
            <div className="getJokeBtnContainer">
                <GetJokeBtn />
                <JokeList />
            </div>
        </div>
    )
}

export default MainSection;