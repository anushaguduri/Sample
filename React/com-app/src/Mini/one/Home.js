import React, { Component } from 'react';
import axios from 'axios'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { bgcolor, color } from '@mui/system';

class Home extends Component {
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
        const Item = styled(Paper)(({ theme }) => ({
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }));
        function FormRow() {
            return (
                <React.Fragment>
                </React.Fragment>
            );
        }
        return (
            <div>              {this.state.post.map(val => {
                return (
                    <div>
                        <Grid item xs={4} >
                            <Item style={{backgroundColor:"pink", border:"1px dashed black", margin:5}}>     <div> id: {val.id}</div> <p>   name: {val.name} and</p> <p>   username: {val.username} </p>
                            </Item>
                        </Grid>
                    </div>
                )
            })}
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        <Grid container item spacing={3}>
                            <FormRow />
                        </Grid>
                    </Grid>
                </Box>
            </div>)
    }
}
export default Home;

