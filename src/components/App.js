import React, { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import '../App.scss';
import { initFavoriteJokes} from '../actions'

import MainSection from './sections/MainSection';
import SectionFavorite from './sections/SectionFavorite';
import FavoriteSectionBtn from './FavoriteSectionBtn/FavoriteSectionBtn';

const App = () => {
  const [favoriteSectionVisible, setFavoriteSectionVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const jokes = JSON.parse(localStorage.getItem('favoriteJokes'));
    if (jokes) {
      dispatch(initFavoriteJokes(jokes));
    }
  }, []);

  const handleFavoriteBtnClick = () => {
    setFavoriteSectionVisible(!favoriteSectionVisible);
	};

  return (
    <div className="app">
        <MainSection className={`${favoriteSectionVisible? 'stopEvents' : ''}`}/>
      <FavoriteSectionBtn
					onFavoriteBtnClick={handleFavoriteBtnClick}
					favoriteSectionVisible={favoriteSectionVisible}
				/>
        <SectionFavorite
        isVisible={favoriteSectionVisible}
        onFavoriteBtnClick={handleFavoriteBtnClick} 
        favoriteSectionVisible={favoriteSectionVisible}/>
      </div>
  )
}
export default App;