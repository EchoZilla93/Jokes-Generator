import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,compose} from 'redux';

import App from './components/App';
import rootReducer from './reducers/rootReducer';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnchancers());
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
document.querySelector('#root'))