import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import rootReducer from './reducers/rootReducer';


const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnchancers(applyMiddleware(thunk))
    );


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
document.querySelector('#root'))