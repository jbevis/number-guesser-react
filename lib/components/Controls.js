import React, { Component } from 'react'

export default class Controls extends Component {
  constructor () {
    super ()
    this.state = {

    }
  }

  render () {
    return (
      <div className = 'controls'>
        <input  type = "number"
                placeholder = "Your best guess"
        />
        <button>Guess</button>
        <button>Clear</button>
        <button>Reset Game</button>
      </div>
    )
  }
}
