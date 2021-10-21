import React, { Component } from "react";

class UserData extends Component {
    state = {
        Data: [{
            name: 'xfdbhf',
            id: 1,
            city: 'ong',
            age: '20'
        }, {
            name: 'yfbb',
            id: 2,
            city: 'pune',
            age: '25'
        }, {
            name: 'zhehbf',
            id: 3,
            city: 'hyd',
            age: '30'
        }]
    }
    render() {
        const DataList = this.state.Data.map(info => {
            return (
                <React.Fragment key={info.id}>
                    <p>Name is {info.name}</p>
                    <p> {info.age} years old</p>
                    <p> and from {info.city}</p>
                </React.Fragment>
            )
        });
        return (
            <div>
                {DataList}
            </div>
        )
    }
}

export default UserData;