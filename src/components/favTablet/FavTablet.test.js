import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import FavTablet from './FavTablet';
import SlideFavWindow from  './SlideFavWindow';

describe('favorite section components', () => {
    it('renders expect snapshot', () => {
        const wrapper = shallow(<SlideFavWindow/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    it('renders expect snapshot',() => {
        const wrapper = shallow(<FavTablet/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})


