import React, { Component } from 'react';

class Counter extends Component {
    render() {        
        return (            
                <div>
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>

                    <button
                    className="btn btn-danger btn-sm m-2" 
                    onClick={() => this.props.onDelete(this.props.counter.id)}>
                        Delete
                    </button>

                    {/* <ul>
                        { this.state.tags.map( tag => <li key={tag}>{ tag }</li>) }
                    </ul> */}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning text-black" : "primary";
        return classes;
    }

    formatCount () {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;