import React from 'react';

import './favSectionBtn.scss';

const favoriteSectionBtn = ({onFavoriteBtnClick,favoriteSectionVisible}) => {
    return (
            <div className={`favorite-btn ${favoriteSectionVisible? 'favorite-btn--favorite-section-visible' : ''}`}
            onClick={onFavoriteBtnClick}>
                <div className="favorite-btn__icon-group">
                    <i className={`fas fa-bars ${
                        favoriteSectionVisible? 'fas fa-times': ''
                    }`}></i>
                </div>
                <span className="favorite-btn__text">Favorite</span>
            </div>
    )
}

export default favoriteSectionBtn;