import React from 'react';
import Clock from 'Clock';

import CountdownForm from 'CountdownForm';


class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.handleSetCountdown=this.handleSetCountdown.bind(this)
  }
handleSetCountdown(seconds){
   this.setState({
    count: seconds
  })
  var int = setInterval( () => { this.setState({
   count: seconds--
 })
 if (this.state.count === 0) clearInterval(int)
console.log(this.state.count);  }, 1000);

}
render() {
  return(
    <div>
      <h2>Countdown</h2>
      <Clock totalSeconds={this.state.count}/>
      <CountdownForm onSetCountdown={this.handleSetCountdown} />
    </div>

  );
}
}
module.exports = Countdown;
