import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
    state = {
        post: null
    }
    componentDidMount = () => {
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(res => {
            console.log(res.data);
            this.setState({
                post: res.data
            });
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        //conditional rendering
        const postList = this.state.post ? (
            <div>
                Title: {this.state.post.title}
                Body: {this.state.post.body}
            </div>
        ) : (<p>No Post Yet!</p>)

        return (
            <React.Fragment>
                {postList}
            </React.Fragment>

        )
    }
}

export default Post;
