import React, { Component } from 'react'

const defaultGuess = ''
const formatNumber = (value) => {
  return parseInt(value, 10) || defaultGuess
}


export default class Controls extends Component {
  constructor () {
    super ()
    this.state = {
      currentGuess: defaultGuess,
    }
  }

  submitGuess () {
    this.props.handleGuess(this.state.currentGuess)
    this.clearInput()
  }

  clearInput () {
    this.setState({ currentGuess: defaultGuess })
  }

  render () {
    return (
      <section  className = 'controls'>
        <input  type = "number"
                placeholder = "Your best guess"
                value = {this.state.currentGuess}
                onChange = {(event) => this.setState({currentGuess: formatNumber(event.target.value)})}
        />
        <div    className = 'buttons'>
          <button onClick = {() => this.submitGuess()}
                  disabled = {!this.state.currentGuess}
          >
            Guess
          </button>
          <button onClick = {() => this.clearInput()}
                  disabled = {!this.state.currentGuess}
          >
            Clear
          </button>
          <button>Reset Game</button>
        </div>
      </section>
    )
  }
}
