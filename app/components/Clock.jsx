import React from 'react';


class Clock extends React.Component {


  formatSeconds(sec){
    var minutes = Math.round(sec / 60);
    var seconds = sec % 60;
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return `${minutes}:${seconds}`;
  }
  render() {
    const  {totalSeconds} = this.props;
    return (
      <div className="clock">
            <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
      </div>
    )

  }

}
module.exports = Clock;
