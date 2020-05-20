import React from 'react';
import FavoriteCardBluePrint from './FavoriteCardBluePrint';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import checkPropTypes from 'check-prop-types';
const setUp = (props={}) => {
    const component = shallow(<FavoriteCardBluePrint{...props}/>);
    return component;
}

describe('favorite card component',() => {
    describe('Cheking propTypes', () => {
        it('Should not throw an error', () => {
            const expectedProps = {
                id:'string',
                text:'string',
                updateInfo:0
            };
            const propsErr = checkPropTypes(FavoriteCardBluePrint.propTypes,expectedProps,'props',FavoriteCardBluePrint.name);
            expect(propsErr).toBeUndefined();
        })
    })
    let component;
    beforeEach(() => {
        component = setUp();
    });
    it('renders expected snapshot',() => {
        const wrapper = component;
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})