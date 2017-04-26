import React from 'react'
import message from '../message'

const LastGuess = ({ guess, answer }) => {
  if (!guess) {
    return (
      <div className = "last-guess">
        Make a guess below.
      </div>
    )
  }

  return (
    <div className = "last-guess">
      <p>Your last guess was...</p>
      <p>{guess}</p>
      <p>{message(guess, answer)}</p>
    </div>
  )
}

export default LastGuess
