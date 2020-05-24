import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import checkPropTypes from 'check-prop-types';

import CheckBoxesRender from './CheckBoxesRender';

const setUp = (props={}) => {
    const component = shallow(<CheckBoxesRender {...props}/>);
    return component;
};

describe('CheckBoxBluePrint component',() => {
    describe('Checking PropTypes', () => {
        it('Should not throw an error', () => {
            const expectedProps = {
                type:'string',
                onSelect: ()=>{},
                selectedId:0,
                id:0,
                className:'string',
                value:'string'
            };
            const propsErr = checkPropTypes(CheckBoxesRender.propTypes,expectedProps,'props',CheckBoxesRender.name);
            expect(propsErr).toBeUndefined();
        });
    });
    let component;
    beforeEach(()=> {
        component = setUp();
    });
    it('renders expected snapshot', () => {
        const wrapper = component;
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});