import React, { Component } from 'react';
import axios from 'axios'

class ApiData extends Component {
    state = {
        post: []
    }
    componentDidMount = () => {
        axios.get('http://jsonplaceholder.typicode.com/users/').then(res => {
            console.log(res.data);

            this.setState({
                post: res.data

            });
        }
        ).catch(error => {
            console.log(error);
        });
    }
    render() {
        return (
            <React.Fragment>
                {this.state.post.map(val => {
                    return (
                        <div>
                            <div style={{ color: "darkgreen" }}> id: {val.id}</div>
                            <p style={{ color: "darkblue" }}>   name: {val.name} and</p>
                            <p style={{ color: "crimson" }}>   username: {val.username} </p>
                        </div>
                    )
                })}
            </React.Fragment>
        )
    }
}

export default ApiData;
