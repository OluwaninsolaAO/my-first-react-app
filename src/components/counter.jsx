import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
        // tags: [ 'tag1', 'tag2', 'tag3' ]
    };

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 })
    }

    render() {        
        return (            
                <div>
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>

                    {/* <ul>
                        { this.state.tags.map( tag => <li key={tag}>{ tag }</li>) }
                    </ul> */}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.value === 0 ? "warning text-black" : "primary";
        return classes;
    }

    formatCount () {
        const { value } = this.state;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;