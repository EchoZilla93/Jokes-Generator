import React from 'react';
import {Head} from './Head';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Head component', () => {
    it('renders expected snapshot', () => {
        const wrapper = shallow(<Head/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
})