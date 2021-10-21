import React, { Component } from "react";
import { connect } from 'react-redux';
import * as action from './actionOne'


class Counter extends Component {

    render() {
        let dec = -2;
        return (
            <div>
                {this.props.counter}
                <button onClick={() => this.props.onDecrement(dec)}>Decrement</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDecrement: val => dispatch(action.onDecrement(val)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);