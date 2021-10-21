import React, { Component } from 'react';
import { connect } from 'react-redux';

class CounterTwo extends Component {
    render() {
        return (
            <div>
                {this.props.counter}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps, null)(CounterTwo);