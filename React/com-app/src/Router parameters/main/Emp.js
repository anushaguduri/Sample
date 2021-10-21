import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Emp extends Component {
    state = {
        displatData: []
    }

    componentDidMount = () => {
        axios.get('http://jsonplaceholder.typicode.com/users/').then(res => {
            console.log(res);
            this.setState({
                displatData: res.data
            });
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        const displatDataList = this.state.displatData.length ? (this.state.displatData.map(info => {
            return (
                <React.Fragment key={info.id}>
                    <Link to={'/api/' + info.id}>
                    <p>Name: {info.name}</p>
                    </Link>
                    <p>username: {info.username}</p>
                    <p> Phone: {info.phone} </p>
                    <p>Website: {info.website} </p>
                </React.Fragment>
            )
        })) : (<p>No Post yet!</p>)

        return (
            <div>
                {displatDataList}
            </div>
        )
    }
}

export default Emp;