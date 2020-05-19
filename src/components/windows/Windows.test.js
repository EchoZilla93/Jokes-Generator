import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

import MainContent from './MainContent';
import FavoriteContent from './FavoriteContent';

describe('windows content',() => {
    it('mainwindow renders expect snapshot',() => {
        const wrapper = shallow(<MainContent/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('favoritewindow renders expect snapshot',() => {
        const wrapper = shallow(<FavoriteContent/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})