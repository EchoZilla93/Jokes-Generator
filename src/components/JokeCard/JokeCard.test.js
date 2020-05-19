import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';

import JokeCard from './JokeCard';

const setUp = (props={}) => {
    const initialState = {};
    const mockStore = configureStore();
    let store = mockStore(initialState);
    const component = shallow(
        <Provider store={store}>
            <JokeCard{...props}/>
        </Provider>
        );
    return component;
}

describe('JokeCard component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });
    it('card renders expected snapshot', () => {
        const wrapper = component;
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})