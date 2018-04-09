import React from 'react';
import Clock from 'Clock';
import Controls from 'Controls';
import CountdownForm from 'CountdownForm';


class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      countdownStatus: 'stopped'
    }
    this.handleSetCountdown=this.handleSetCountdown.bind(this)
    this.startTimer=this.startTimer.bind(this)
    this.onStatusChange=this.onStatusChange.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer()
          break;
        case 'stopped':
          this.setState({ count: 0 })
        case 'paused':
          clearInterval(this.timer);
          this.timer=undefined;
          break;
        }
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer=undefined;
  }
  onStatusChange(newStatus){
    this.setState({
      countdownStatus: newStatus
    })
  }
  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      })
      if (newCount === 0 ) {
        this.setState({countdownStatus: 'stopped'})
      }
    }, 1000)
  }

  handleSetCountdown(seconds){
   this.setState({
    count: seconds,
    countdownStatus: 'started'
  })
}
renderbutton() {
  if (this.state.countdownStatus === 'stopped') {
    return <CountdownForm onSetCountdown={this.handleSetCountdown} />
  } else {
    return    <Controls countdownStatus={this.state.countdownStatus} onStatusChange={this.onStatusChange}/>
  }
}
  render() {

    return(
      <div>
         <h1 className="page-title">Countdown</h1>
        <Clock totalSeconds={this.state.count}/>
        {this.renderbutton()}
      </div>
    );
  }
}

module.exports = Countdown;
