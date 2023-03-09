import React, { Component } from 'react';

class Counter extends Component {
    state = { };
    render() { 
        return (
            <div className='container'>
                <div className='pt-5 pb-5'>
                    <h1>Hello World!</h1>
                    <button>Increment</button>
                </ div>
            </div>
        );
    }
}
 
export default Counter;