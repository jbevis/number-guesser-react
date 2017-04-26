import React, { Component } from 'react'
import Controls from './Controls'
import LastGuess from './LastGuess'

export default class NumberGuesser extends Component {
  constructor () {
    super ()
    this.state = {
      lastGuess: null,
      answer: 42,
    }
  }

  render () {
    return (
      <section className = "number-guesser">
        <header><span id = "headline">Number</span> Guesser</header>
        <LastGuess guess = {this.state.lastGuess} answer = {this.state.answer} />
        <Controls handleGuess = {(guess) => this.setState({ lastGuess: guess})}/>
      </section>
    )
  }
}
