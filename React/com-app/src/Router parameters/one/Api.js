import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

class Api extends Component {
    state = {
        displatData: []
    }
    componentDidMount = () => {
        axios.get('http://jsonplaceholder.typicode.com/users/'
            // 'https://jsonplaceholder.typicode.com/posts/'
        ).then(res => {
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
                    <Box component="div" sx={{ p: 2, m: 3, border: '1px dashed darkblue', bgcolor: "lightgreen" }}>
                        <Button>
                            <Link to={'/api/' + info.id}>
                                <p style={{color:'red'}}>Name: {info.name}</p>
                            </Link>
                            <p>username: {info.username}</p>
                            <p> Phone: {info.phone} </p>
                            <p>Website: {info.website} </p>
                        </Button>
                    </Box>
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
export default Api;

// src="/thirdParty/hcaptcha-api.js"