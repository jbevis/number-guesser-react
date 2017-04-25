import React from 'react'

const LastGuess = (props) => {
  const guess = props.lastGuess
  const answer = props.answer

  if (!guess) {
    return (
      <div className = "last-guess">
        Make a guess below.
      </div>
    )
  }

  let message
  if (guess < answer) {
    message = 'That guess is too low, try again.'
  } else if (guess > answer) {
    message = 'That guess is too high, try again'
  } else {
    message = 'BOOM!'
  }

  return (
    <div className = "last-guess">
      <p>Your last guess was...</p>
      <p>{guess}</p>
      <p>{message}</p>
    </div>
  )
}

export default LastGuess
