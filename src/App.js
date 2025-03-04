import {Component} from 'react'
import Clock from './Components/Clock'
import './App.css'

class App extends Component {
  state = {
    showClock: false
  }
  onToggleClock = () => {
    this.setState( prevState => {
      const { showClock } = prevState
      return {
        showClock: !showClock
      }
    })
  }
  render() {
    const { showClock } = this.state
    return (
      <div className="app-container">
        <button onClick={ this.onToggleClock } type="button" className="toggle-button">
          {showClock ? 'hide Clock' : 'show Clock'}
        </button>
        {showClock && <Clock />}
      </div>
    )
  }
}

export default App
