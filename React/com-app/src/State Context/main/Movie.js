import React, { Component } from 'react';
import DisplayMovieList from './DisplayMovieList';
import { MovieContext } from './MovieContext';

class Movie extends Component {
    static contextType = MovieContext;
    // state = {
    //     movieData: [{
    //         name: 'Harry Potter',
    //         id: 1,
    //         price: '$10'
    //     }, {
    //         name: 'Inception',
    //         id: 2,
    //         price: '$20'
    //     }, {
    //         name: 'BanderSnatch',
    //         id: 3,
    //         price: '$30'
    //     }]
    // }

    render() {
        return (
            <React.Fragment>
                {/*<DisplayMovieList movieData={this.state.movieData} />*/}
                <DisplayMovieList movieData={this.context} />
            </React.Fragment>
        )
    }
}

export default Movie;