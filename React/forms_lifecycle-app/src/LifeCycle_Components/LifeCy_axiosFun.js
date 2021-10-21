import axios from 'axios';
import React, { useEffect, useState } from 'react';

const LifeCy_axiosFun = () => {
    const [age, setAge] = useState(22);
    const [post, setPost] = useState({});

    useEffect(() => {
        document.title = age;
    });

    const fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/10').then(res => {
            console.log(res.data);
            setPost(res.data);
        }
        ).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <div>
            {age}
            <br />
            Title:
            {post.title}
        </div>
    )
}

export default LifeCy_axiosFun;

// task
//fetch data from api in the form of array and display 5 records in UI
//use api: http://jsonplaceholder.typicode.com/users/