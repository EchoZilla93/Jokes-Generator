import { category as reducer } from './jokeCategoryReducer';

describe('error reducer', () => {
    it('changes to correct category', () => {
        const state = 'random';

        const request = {
            type: 'SET_CATEGORY',
            payload: 'animal'
        };

        const result = 'animal';

        expect(reducer(state, request)).toEqual(result);
    })
});