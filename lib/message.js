const message = (guess, answer) => {
  if (guess < answer) {
    return 'That guess is too low, try again.'
  }

  if (guess > answer) {
    return 'That guess is too high, try again'
  }

  if (guess === answer) {
    return 'BOOM!'
  }
}

export default message
