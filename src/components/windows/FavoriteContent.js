import React from 'react';

import FavoriteCard from '../Favorite/FavoriteCard';
import './favoriteStyles.scss'

export const FavoriteContent = () =>{
    return(
        <aside className="favorite">
            <h1>Favorite</h1>
            <FavoriteCard/>
            <FavoriteCard/>
            <FavoriteCard/>
            <FavoriteCard/>
            <FavoriteCard/>
        </aside>
    )
}

export default FavoriteContent;