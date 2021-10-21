import axios from 'axios';
import React, { useEffect, useState } from 'react';

const LifeCy_axFunOne = () => {
    const [post, setPost] = useState([]);

    const fetchData = () => {

//         var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://maps.googleapis.com/maps/api/timezone/json?location=39.6034810%2C-119.6822510&timestamp=1331766000&language=es&key=YOUR_API_KEY',
//   headers: { }
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });

        axios.get('http://api.timezonedb.com/v2.1/list-time-zone').then(res => {
            console.log(res.data);

            setPost(res.data.slice(0, 5));
        }
        ).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <React.Fragment>
            <h5 style={{ backgroundColor: "black", color: "white" }}> fetch data from api using function</h5>
            {post.map(val => {
                return (
                    <div >
                        <p style={{ backgroundColor: "tomato" }}> id: {val.id}</p>
                        <span style={{ backgroundColor: "steelblue" }}>   name: {val.name} and</span>
                        <span style={{ backgroundColor: "seagreen" }}>   username: {val.username} </span>
                    </div>
                )
            })}
        </React.Fragment>
    )
}
export default LifeCy_axFunOne;

// task
//fetch data from api in the form of array and display 5 records in UI
//use api: http://jsonplaceholder.typicode.com/users/