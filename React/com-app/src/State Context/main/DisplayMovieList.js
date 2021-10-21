import React from 'react';

const DisplayMovieList = (props) => {
    const { movieData } = props;
    const movieDataList = movieData.map(info => {
        return (
            <div key={info.id}>
                <p>{info.name}</p>
                <p>{info.price}</p>
            </div>
        )
    });
    return (
        <React.Fragment>
            {movieDataList}
        </React.Fragment>
    )
}

export default DisplayMovieList;