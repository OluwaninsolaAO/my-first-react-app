import { Component } from 'react';
import { Route, Routes } from 'react-router';
import Home from './components/home';
import MyComponent from './components/mycomponent';

class App extends Component {
  render() { 
    return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/MyComponent' element={<MyComponent />}/>
      </Routes>
    );
  }
}
 
export default App;