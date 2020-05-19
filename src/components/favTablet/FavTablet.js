import React,{useState} from 'react';

import './favTablet.scss';
import SlideFavWindow from './SlideFavWindow';

const FavTablet = () => {
    const [favClick,setFavClick] = useState(false);

    const windowToogle = () => {
        setFavClick(true);
            if(favClick === true){
                return setFavClick(false)
            }
    }
    return(
        <div className="favoriteTabletView">
            <button onClick={windowToogle} className="favoriteTabletView__openFav">
                <i className={favClick?"fas fa-times" : "fas fa-bars"}></i>
            </button>
            <h1 className="favoriteTabletView__heading">Favorite</h1>
            {favClick && <SlideFavWindow/>}
        </div> 
    )
};

export default FavTablet;