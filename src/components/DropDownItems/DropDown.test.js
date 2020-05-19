import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {CategoriesBtns} from './CategoriesBtns';
import {SearchInput} from './SearchInput';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

describe('DropDown items',() => {
    const initialState = {};
    const mockStore = configureStore();
    let store,wrapper;
    it('buttons renders expected snapshot', () => {
         store = mockStore(initialState);
         wrapper = shallow(
         <Provider store = {store}>
             <CategoriesBtns/>
        </Provider>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('search input renders expected snapsot',() => {
        store = mockStore(initialState);
        wrapper = shallow(
            <Provider store={store}>
                <SearchInput/>
            </Provider>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    })
});