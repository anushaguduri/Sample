import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

class ContactUs extends Component {
    state = {
        obj: [
            { Location: " hyd", contactNumber: 123, emailId: "ht@gmail.com" },
            { Location: " ong", contactNumber: 456, emailId: "kfuyfufy@gmail.com" },
            { Location: " pune", contactNumber: 789, emailId: "gfhfgb@gmail.com" },
            { Location: " panjab", contactNumber: 147, emailId: "fffgf@gmail.com" },
            { Location: " bangalore", contactNumber: 258, emailId: "sfghug@gmail.com" }]
    };
    handleClick = (info => {
        console.log("employeeData", this.Location, this.contactNumber, this.emailId)
    });
    render() {
        return (
            <div>
                {this.state.obj.map(info => {
                    return (
                        <div>
                            <Card sx={{ maxWidth:400, b: '2px dashed darkred', bgcolor: "blue" }} style={{ margin: 10, marginLeft: 550, border: "2px dashed red" }}>
                                <CardActionArea >
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" >
                                            <p> Emp Location:  {info.Location}, </p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card><Card sx={{ maxWidth: 400, b: '2px dashed darkred', bgcolor: "red" }} style={{ margin: 10, marginLeft: 550, border: "2px dashed red" }}>
                                <CardActionArea >
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" >
                                            <p> Emp contactNumber:  {info.contactNumber}, </p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card><Card sx={{ maxWidth: 400, b: '2px dashed darkred', bgcolor: "gray" }} style={{ margin: 10, marginLeft: 550, border: "2px dashed red" }}>
                                <CardActionArea >
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" >
                                            <p> Emp emailId:  {info.emailId}, </p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    )
                })}
            </div>
        );
    }
}
export default ContactUs;