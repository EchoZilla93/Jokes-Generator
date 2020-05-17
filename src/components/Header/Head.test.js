import React from 'react';
import {Head} from './Head';
import {shallow} from 'enzyme';

describe('Head component', () => {
    it('renders expected snapshot', () => {
        const wrapper = shallow(<Head/>);
        expect(wrapper).toMatchSnapshot();
    });
})