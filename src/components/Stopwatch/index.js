import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {initialMins: 0, initialSecs: 0, isRunning: false}

  incrementSeconds = () => {
    this.setState(prevState => ({
      initialSecs: prevState.initialSecs + 1,
    }))
  }

  onStart = () => {
    this.setState(prevState => ({isRunning: !prevState.isRunning}))

    this.stateId = setInterval(this.incrementSeconds, 1000)
  }

  onStop = () => {
    clearInterval(this.stateId)
    this.setState(prevState => ({isRunning: !prevState.isRunning}))
  }

  onReset = () => {
    this.setState({
      initialMins: 0,
      initialSecs: 0,
      isRunning: false,
    })
  }

  render() {
    const {initialMins, initialSecs} = this.state
    const TotalSeconds = initialMins * 60 + initialSecs
    const minutes = Math.floor(TotalSeconds / 60)
    const seconds = Math.floor(TotalSeconds % 60)
    const minutesString = minutes > 9 ? minutes : `0${minutes}`
    const secondsString = seconds > 9 ? seconds : `0${seconds}`
    return (
      <div className="bg-container">
        <h1 className="heading">StopWatch</h1>
        <div className="card">
          <div className="img-text-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="icon"
            />
            <p>Timer</p>
          </div>
          <h1>
            {minutesString}:{secondsString}
          </h1>
          <div>
            <button
              type="button"
              className="button start"
              onClick={this.onStart}
            >
              Start
            </button>
            <button type="button" className="button stop" onClick={this.onStop}>
              Stop
            </button>
            <button
              type="button"
              className="button reset"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
