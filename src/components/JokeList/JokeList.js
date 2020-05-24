import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import JokeCard from '../JokeCard/JokeCard';

export const JokeList = () => {
    const jokes = useSelector(state => state.jokes.jokes);

    return (
        <Fragment>
            {jokes &&
                jokes.map(joke => (
                    <JokeCard
                        key={joke.id}
                        id={joke.id}
                        joke={joke.value}
                        updatedAt={joke.updated_at}
                        category={joke.categories}
                        favorite={joke.favorite}
                        url={joke.url}
                    />
                ))}
        </Fragment>
    )
}

export default JokeList;