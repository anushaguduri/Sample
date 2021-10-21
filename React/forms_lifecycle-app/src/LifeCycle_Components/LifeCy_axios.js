import React, { Component } from 'react';
import axios from 'axios';

class LifeCy_axios extends Component {
    state = {
        post: {}
    }
    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/10').then(res => {
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
            <div>
                Title:
                {this.state.post.title}
                <br />
                Body:
                {this.state.post.body}
               <table>
               <th></th>
               </table>
            </div>
        )
    }
}

export default LifeCy_axios;

// http methods
// get
// post
// update/post
// delete

// axios.post('api', data).then().catch();

//task
// npm install axios
//fetch data from api in the form of array and display 10 records in UI