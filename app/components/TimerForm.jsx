import React from 'react';

class TimerForm extends React.Component {
  render(){
    return(
      <div className="countdown-control">
        {this.props.label ? <button className="button secondary" onClick={this.props.handlePause}>Pause</button>
        :
        <button className="button primary" onClick={this.props.handleStart}>Start</button> }
        <button className="button warning" onClick={this.props.handleClear}>Clear</button>
      </div>
    )
  }
}

module.exports = TimerForm;
