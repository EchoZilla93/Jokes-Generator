import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import '../App.scss';
import { initFavoriteJokes, removeFavorite } from '../actions'

import MainContent from './windows/MainContent';
import FavoriteContent from './windows/FavoriteContent';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const jokes = JSON.parse(localStorage.getItem('favoriteJokes'));
    if (jokes) {
      dispatch(initFavoriteJokes(jokes));
    }
    // dispatch(removeFavorite("cwguxfhptcuagndjdt1hya"));
  }, []);

  return (
    <div>
      <div className="wrapper">
        <MainContent />
      </div>
      <div className="wrapperfav">
        <FavoriteContent />
      </div>
    </div>
  )
}
export default App;