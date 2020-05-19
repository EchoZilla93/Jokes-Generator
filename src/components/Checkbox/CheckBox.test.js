import React from 'react';
import CheckBoxesRender from './CheckBoxesRender';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

const setUp = (props={}) => {
    const component = shallow(<CheckBoxesRender {...props}/>);
    return component;
}

describe('CheckBoxBluePrint component',() => {
    let component;
    beforeEach(()=> {
        component = setUp();
    })
    it('renders expected snapshot', () => {
        const wrapper = component;
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})