import React, { Component } from 'react'

export default class TodoPart extends Component {
  render() {
    return (
      <div>
        {this.props.item}
      </div>
    )
  }
}
