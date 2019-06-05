import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    const newColor = this.props.changeColor()
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
