import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputPart from './components/InputPart.js'
import TodoPart from './components/TodoPart.js'

class App extends Component {
  render() {
    return (
     <div>
       <span>Input</span>
       <InputPart />
     </div>
    )
  }
}

export default App;
