import React from 'react';

import FavoriteCardBluePrint from '../FavoriteCard/FavoriteCardBluePrint';
import './favoriteStyles.scss'

export const SectionFavorite = ({
    isVisible }) => {
    return (
        <div className="favorite-container">
            <div
                className={`favorite-section ${isVisible ? 'favorite-section--visible' : ''}`}
            >
                <span>Favorite</span>
                <FavoriteCardBluePrint />
            </div>
        </div>
    )
}

export default SectionFavorite;