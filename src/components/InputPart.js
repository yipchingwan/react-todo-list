import React, { Component } from 'react'
import TodoPart from './TodoPart.js'

export default class InputPart extends Component {
    state = {item : '', numberArray : [], size : 0}

    updateInput = (evt)=>{
        this.setState({item : evt.target.value})
    }
    addItem = (evt)=>{    
        this.setState(prevState => ({
            numberArray: [...prevState.numberArray, this.state.item]
          }))
    }
    render() {
        return (
        <div>
            <input type="type" onChange={this.updateInput}></input>
            <button onClick={this.addItem}>todo!</button>
            {this.state.numberArray.map(e=>(<TodoPart item={e}/>))}          
        </div>
        )
    }
}
