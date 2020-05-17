import {
    multipleJokesExist
} from './Jokes';

describe('selectors', () => {
    it('multipleJokesExist - return 0 when total is 0', () => {
        const state = {
            jokes:{
                multipleJokes:{
                    total: 0
                }
            }
        }

        const result = multipleJokesExist(state);
        expect(result).toEqual(0);
    });

    it('multipleJokesExist - return 2 when total is 2', () => {
        const state = {
            jokes:{
                multipleJokes:{
                    total: 2
                }
            }
        }

        const result = multipleJokesExist(state);
        expect(result).toEqual(2);
    });
});