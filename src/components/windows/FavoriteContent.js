import React from 'react';

import FavoriteCardBluePrint from '../Favorite/FavoriteCardBluePrint';
import './favoriteStyles.scss'

export const FavoriteContent = () =>{
    return(
        <aside className="favorite">
            <h1>Favorite</h1>
            <FavoriteCardBluePrint />
        </aside>
    )
}

export default FavoriteContent;