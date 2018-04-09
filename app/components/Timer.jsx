import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls'


class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      timerStatus: 'paused'
    }
    this.startTimer = this.startTimer.bind(this)
    this.onStatusChange = this.onStatusChange.bind(this)
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          console.log('started')
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined
          break;
      }
    }
  }
  startTimer() {
    this.timer = setInterval( () => {
     let newCount = this.state.count + 1
     this.setState({count: newCount})
      console.log(this.state.count)  }, 1000);
  }
  onStatusChange(newStatus){
    this.setState({
      timerStatus: newStatus
    })
  }
  render() {
    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={this.state.count}/>
        <Controls countdownStatus={this.state.timerStatus} onStatusChange={this.onStatusChange}/>
      </div>
    );
  }
}
module.exports = Timer;
