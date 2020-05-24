import React from 'react';
import FavoriteCardBluePrint from './FavoriteCardBluePrint';
import {
    shallow
} from 'enzyme';
import toJson from 'enzyme-to-json';
import {
    Provider
} from 'react-redux';
import configureStore from 'redux-mock-store';

describe('favorite card component', () => {
    it('renders snapshot without favorite jokes', () => {
        const mockStore = configureStore();
        const initialState = {};
        const store = mockStore(initialState);
        const wrapper = shallow(
            <Provider store={store}>
                <FavoriteCardBluePrint />
            </Provider>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})