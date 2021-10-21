import React, { Component } from 'react';
import axios from 'axios';

class LifeCy_axios extends Component {
    state = {
        post: []
    }
    componentDidMount = () => {
        axios.get('http://jsonplaceholder.typicode.com/users/').then(res => {
            console.log(res.data);

            this.setState({
                post: res.data.slice(0, 3)

            });
        }
        ).catch(error => {
            console.log(error);
        });
    }
    render() {
        return (
            <React.Fragment>
                    <h5 style={{backgroundColor: "purple", color: "red" }}> fetch data from api</h5>
                    {this.state.post.map(val => {
                        return (
                            <div style={{backgroundColor: "grey"}}>
                                <div style={{color: "orange" }}> id: {val.id}</div>
                                <span style={{color: "yellow" }}>   name: {val.name} and</span>
                                <span style={{color: "pink" }}>   username: {val.username} </span>
                            </div>
                        )
                    })}

                {/* Data:  <br/> Title: {this.state.post.title}, Body: {this.state.post.body} <br/> */}


            </React.Fragment>
        )
    }
}

export default LifeCy_axios;

// http methods
// get  https://jsonplaceholder.typicode.com/posts/
// post
// update/post
// delete

// axios.post('api', data).then().catch();

//task
// npm install axios
//fetch data from api in the form of array and display 10 records in UI