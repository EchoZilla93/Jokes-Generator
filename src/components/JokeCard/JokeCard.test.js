import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import checkPropTypes from 'check-prop-types';

import JokeCard from './JokeCard';

const data = {
    categories: ['animal'],
    created_at: '2020-01-05 13:42:20.568859',
    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
    id: 'kv95RRh0SCie8_8q4B7hRA',
    updated_at: '2020-01-05 13:42:20.568859',
    url: 'https://api.chucknorris.io/jokes/kv95RRh0SCie8_8q4B7hRA',
    value: 'The sun doesnt shine on Chuck Norris. If it did well you know when a solar eclipse is coming.'
};

const propData = {
    joke: 'The sun doesnt shine on Chuck Norris. If it did well you know when a solar eclipse is coming.',
    id: 'kv95RRh0SCie8_8q4B7hRA',
    category: ['animal']
}

const initialState = {
    jokes: {
        jokes: [data],
        favoriteJokes: []
    }
};

const setUp = (props = propData) => {
    const mockStore = configureStore();
    let store = mockStore(initialState);
    const component = shallow(
        <Provider store={store}>
            <JokeCard{...props} />
        </Provider>
    );
    return component;
};

describe('JokeCard component', () => {
    describe('Cheking propTypes', () => {
        it('Should not throw an error', () => {
            const expectedProps = {
                id: 'string',
                joke: 'string',
                update: 0,
                category: [],
                favorite: false
            };
            const propsErr = checkPropTypes(JokeCard.propTypes, expectedProps, 'props', JokeCard.name);
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