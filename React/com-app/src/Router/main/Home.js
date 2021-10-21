import React, { Component } from 'react';
import Display from './Display';

class Home extends Component {
    state = {
        movieData: [{
            name: 'Harry Potter',
            id: 1,
            price: '$10'
        }, {
            name: 'Inception',
            id: 2,
            price: '$20'
        }, {
            name: 'BanderSnatch',
            id: 3,
            price: '$30'
        }]
    }
    render() {
        const movieDataList = this.state.movieData.map(movie => {
            return (
                <React.Fragment key={movie.id}>
                    <p>{movie.name}</p>
                    <p>{movie.price}</p>
                </React.Fragment>
            )
        });
        return (
            <div>
                {movieDataList}
                <Display movieData={this.state.movieData} />
            </div>
        )
    }
}
export default Home;