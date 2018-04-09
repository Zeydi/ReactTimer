import React from 'react';
import Clock from 'Clock';
import TimerForm from 'TimerForm';



class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      status:null,
      clear:0


    }
    this.handleSetTimer=this.handleSetTimer.bind(this)
    this.handlePause=this.handlePause.bind(this)
    this.handleStart=this.handleStart.bind(this)
    this.handleClear=this.handleClear.bind(this)
  }

  handleSetTimer(){
     this.setState({
       label:1
    })
    var int = setInterval( () => { this.setState({
     count:  this.state.count + 1
   })
   if (this.state.status === 0 || this.state.clear === 1) {
     clearInterval(int)}
     if (this.state.count === 0 ) {
        clearInterval(int)}

  console.log(this.state.count)  }, 1000);


  }

  handlePause(){
    this.setState({
      label:0,
      status:0
    })
  }
  handleStart(){
    this.handleSetTimer()
  }
  handleClear(){
    this.setState({
      count: 0,
      label: 0,
      clear: 1
    })
  }

render() {
  return (
    <div>
      <h2>Timer</h2>
      <Clock totalSeconds={this.state.count}/>
      <TimerForm
        handleSetTimer={this.handleSetTimer}
        handlePause={this.handlePause}
        handleStart={this.handleStart}
        handleClear={this.handleClear}
        label={this.state.label}
      />
    </div>
  )
}
}
module.exports = Timer;
