import React from 'react';
import { shallow } from 'enzyme';
import * as reactRedux from 'react-redux';
import JokeList from './JokeList';

describe('component', () => {
    it('renders component without jokes', () => {
        jest.spyOn(reactRedux, 'useSelector').mockImplementation(cb => cb({
            jokes: {
                jokes: []
            }
        }))
        const wrapper = shallow(<JokeList />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders component with jokes', () => {
        jest.spyOn(reactRedux, 'useSelector').mockImplementation(cb => cb({
            jokes: {
                jokes: [{
                    categories: ['animal'],
                    created_at: '2020-01-05 13:42:20.568859',
                    icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
                    id: 'kv95RRh0SCie8_8q4B7hRA',
                    updated_at: '2020-01-05 13:42:20.568859',
                    url: 'https://api.chucknorris.io/jokes/kv95RRh0SCie8_8q4B7hRA',
                    value: 'The sun doesnt shine on Chuck Norris. If it did well you know when a solar eclipse is coming.'
                }]
            }
        }))
        const wrapper = shallow(<JokeList />);
        expect(wrapper).toMatchSnapshot();
    });
})