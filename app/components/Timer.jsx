import React from 'react';
import Clock from 'Clock';
class Timer extends React.Component {
render() {
  return (
    <div>
      <h2>Timer</h2>
      <Clock totalSeconds={123}/>
    </div>
  )
}
}
module.exports = Timer;
