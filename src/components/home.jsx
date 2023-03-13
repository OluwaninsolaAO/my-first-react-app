import React, { Component } from 'react';
import NavBar from './navbar';
import Counters from './counters';
import { Link } from 'react-router-dom';
import MyComponent from './mycomponent';

class Home extends Component {
  state = {
      counters: [
          {id: 1, value: 4},
          {id: 2, value: 0},
          {id: 3, value: 0},
          {id: 4, value: 0}
      ]
  };

  handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value++;
      this.setState({ counters });
  }

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters});
  };

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState({counters});
  };

  render() { 
    return (
      <>
        <NavBar totalCounters={ this.state.counters.filter(c => c.value > 0).length }/>
        <div>
          <Counters 
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          counters={this.state.counters}
          />
        </div>
        <Link to='/MyComponent'><button className="btn btn-secondary mt-3">My Component</button></Link>
      </>
    );
  }
}

export default Home;