import React, { Component } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

class Post extends Component {
    state = {
        post: null
    }
    componentDidMount = () => {
        let id = this.props.match.params.post_id;
        axios.get('http://jsonplaceholder.typicode.com/users/'
            // 'https://jsonplaceholder.typicode.com/posts/' 
            + id).then(res => {
                console.log(res.data);
                this.setState({
                    post: res.data
                });
            }).catch(error => {
                console.log(error);
            });
    }
    render() {
        const postList = this.state.post ? (
            <div>
                <p> Name: {this.state.post.name} </p>
                <p> username: {this.state.post.username} </p>
                <p> Phone: {this.state.post.phone} </p>
                <p>Website: {this.state.post.website} </p>
            </div>
        ) : (<p>No Post Yet!</p>)
        return (
            <React.Fragment>
                <Card sx={{ maxWidth: 345, b:'2px dashed darkred', bgcolor:"pink"}} style={{ margin: 180, marginLeft: 550, border: "2px dashed red" }}>
                    <CardActionArea >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" >
                                {postList}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                );
            </React.Fragment>
        )
    }
}
export default Post;
