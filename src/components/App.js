import React from 'react';
import '../App.scss';

import MainContent from './windows/MainContent';
import FavoriteContent from './windows/FavoriteContent';

const App = () => {
  return (
    <div className="wrapper">
      <MainContent/>
      <FavoriteContent/>
    </div>
  )
}
export default App;
