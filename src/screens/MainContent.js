import React from 'react';

import Head from '../components/Head';
import CheckBoxSelectors  from '../components/CategoryBoxSelectors';
import RandomBoxSelection from '../components/RandomBoxSelector';
import Search from '../components/Search';
import GetJokeBtn from '../components/GetJokeBtn';
import JokeCard from '../components/JokeCard';

const MainContent = () => {
    return (
        <div>
            <Head/>
            <RandomBoxSelection/>
            <CheckBoxSelectors />
            <Search/>
            <GetJokeBtn/>
            <JokeCard/>
        </div>
    )
}

export default MainContent;