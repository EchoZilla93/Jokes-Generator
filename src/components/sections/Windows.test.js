import React from 'react';
import {
    shallow
} from 'enzyme';
import toJson from 'enzyme-to-json';

import MainSection from './MainSection';
import SectionFavorite from './SectionFavorite';

describe('windows content', () => {
    it('mainwindow renders expect snapshot', () => {
        const wrapper = shallow( < MainSection / > );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('favoritewindow renders expect snapshot', () => {
        const wrapper = shallow( < SectionFavorite / > );
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})