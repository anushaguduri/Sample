import React, { Component, createContext } from "react";

// context: state management
export const MovieContext = createContext();

export class MovieProvider extends Component {
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
        return (
            <div>
                <MovieContext.Provider value={this.state.movieData}>
                    {this.props.children}
                </MovieContext.Provider>

            </div>
        )
    }
}
