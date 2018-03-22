import React from 'react';
import Clock from 'Clock';
class Timer extends React.Component {

handleSubmit() {

}

render() {
  return (
    <div>
      <h2>Timer</h2>
      <Clock totalSeconds={0}/>
    </div>
  )
}
}
module.exports = Timer;
