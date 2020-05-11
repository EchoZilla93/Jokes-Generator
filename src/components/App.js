import React from 'react';
import '../App.scss';

import MainContent from './windows/MainContent';
import FavoriteContent from './windows/FavoriteContent';

const App = () => {
  return (
    <div>
        <div className="wrapper">
            <MainContent/>
        </div>
          <div className="wrapperfav">
              <FavoriteContent/>
          </div>
      </div>
  )
}
export default App;
