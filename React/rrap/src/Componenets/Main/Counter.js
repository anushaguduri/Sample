import React, { Component } from "react";
import { connect } from 'react-redux';
import * as action from './action';
class Counter extends Component {

    render() {
        let inc = 5;
        return (
            <div>
                {this.props.counter}
                <button onClick={() => this.props.onIncrement(inc)}>Increment</button>
            </div>
        )
    }
}

//getting data from central store
const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

//dispatching data to store
const mapDispatchToProps = dispatch => {
    return {
        onIncrement: val => dispatch(action.onIncrement(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);