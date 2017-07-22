import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../../common/actions/counter';

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions, dispatch)
}

class News extends Component {
    render() {
        const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
        return (
            <div>
                <p>
                    Counter: {counter} times
                    {' '}
                    <button onClick={increment}>+</button>
                    {' '}
                    <button onClick={decrement}>-</button>
                    {' '}
                    <button onClick={incrementIfOdd}>Increment if odd</button>
                    {' '}
                    <button onClick={incrementAsync}>Increment Async</button>
                </p>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);