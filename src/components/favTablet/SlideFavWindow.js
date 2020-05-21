import React from 'react';
import FavoriteCardBluePrint from '../Favorite/FavoriteCardBluePrint';


const SlideFavWindow = () => {
    return(
        <div className="favoritesList">
            <div className="favoritesList__item">
                <FavoriteCardBluePrint/>
                <FavoriteCardBluePrint />
                <FavoriteCardBluePrint />
            </div>
        </div>
    )
}

export default SlideFavWindow;