import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';

import GetHJokeBtn from './GetJokeBtn';

describe('GetJoke button', () => {
    it('renders expect snapshot', () => {
        const initialState = {};
        const mockStore = configureStore();
        let store = mockStore(initialState);
        const wrapper = shallow(
            <Provider store = {store}>
                <GetHJokeBtn/>
            </Provider>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})