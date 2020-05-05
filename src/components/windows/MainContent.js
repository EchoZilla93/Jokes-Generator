import React from 'react';

import Head from '../Header/Head';
import CheckBoxesRender from '../Checkbox/CheckBoxesRender';
import GetJokeBtn from '../../components/GetJokeBtn/GetJokeBtn';

const MainContent = () => {
    return (
        <div>
            <Head/>
            <CheckBoxesRender/>
            <GetJokeBtn/>
        </div>
    )
}

export default MainContent;