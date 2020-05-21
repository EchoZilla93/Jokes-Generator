import React from 'react';
import {withGetScreen} from 'react-getscreen';

import FavoriteCardBluePrint from '../Favorite/FavoriteCardBluePrint';
import './favoriteStyles.scss'
import FavTablet from '../favTablet/FavTablet';

export const FavoriteContent = props =>{
    if (props.isTablet()) return <FavTablet/>;
    if(props.isMobile()) return <FavTablet/>;
    return(
        <aside className="favorite">
            <h1>Favorite</h1>
            <FavoriteCardBluePrint />
            <FavoriteCardBluePrint />
            <FavoriteCardBluePrint />
            <FavoriteCardBluePrint />
            <FavoriteCardBluePrint />
        </aside>
    )
}

const options = {mobileLimit: 500, tabletLimit: 1025}
export default withGetScreen(FavoriteContent,options);