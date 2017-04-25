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
        <LastGuess guess = {this.state.lastGuess} answer = {this.state.answer} />
        <Controls />
      </section>
    )
  }
}
