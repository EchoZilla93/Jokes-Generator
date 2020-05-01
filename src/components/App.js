import React from 'react';
import '../App.scss';

import MainContent from '../screens/MainContent';
import FavoriteContent from '../screens/FavoriteContent';

const App = () => {
  return (
    <div className="wrapper">
      <MainContent/>
      <FavoriteContent/>
    </div>
  )
}
export default App;
