import React from 'react';
import FavoriteCardBluePrint from './FavoriteCardBluePrint';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
const setUp = (props={}) => {
    const component = shallow(<FavoriteCardBluePrint{...props}/>);
    return component;
}

describe('favorite card component',() => {
    let component;
    beforeEach(() => {
        component = setUp();
    });
    it('renders expected snapshot',() => {
        const wrapper = component;
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})