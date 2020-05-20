import React from 'react';
import {shallow} from 'enzyme';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import checkPropTypes from 'check-prop-types';

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
};

describe('JokeCard component', () => {
    describe('Cheking propTypes', () => {
        it('Should not throw an error',() => {
            const expectedProps = {
                id:'string',
                joke:'string',
                update:0,
                category:[],
                favorite:false
            };
            const propsErr = checkPropTypes(JokeCard.propTypes,expectedProps,'props',JokeCard.name);
            expect(propsErr).toBeUndefined();
        })

    })
    let component;
    beforeEach(() => {
        component = setUp();
    });
    it('card renders expected snapshot', () => {
        const wrapper = component;
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})