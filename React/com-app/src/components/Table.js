import React, { Component } from 'react';

class Table extends Component {
    // state = {
    //     data: {
    //         name: 'Lisa',
    //         age: 22
    //     },
    //     dataTwo : {
    //         name: 'Lisa',
    //         age: 22
    //     }
    // }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <Columns />
                    </tr>
                </thead>
            </table>
        )
    }
}

export default Table;

class Columns extends Component {
    render(){
        // const {data} = this.props.data;
        // console.log(data);
        return(
            <React.Fragment>
            <td>Lisa</td>
            <td>Harry</td>
            </React.Fragment>
        )
    }
}
