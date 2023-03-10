import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        // tags: [ 'tag1', 'tag2', 'tag3' ]
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {        
        return (            
            <div className='container'>
                <div className='pt-5 pb-5'>
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                    <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>

                    {/* <ul>
                        { this.state.tags.map( tag => <li key={tag}>{ tag }</li>) }
                    </ul> */}
                </ div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-3 bg-";
        classes += this.state.count === 0 ? "warning text-black" : "primary";
        return classes;
    }

    formatCount () {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;