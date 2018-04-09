import React from 'react';



class CountdownForm extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit=this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault;
    const seconds = this.refs.seconds.value;
    if (seconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(seconds, 10));
    }

  }

  render() {
    return(
      <div>
       <form   ref="form" onSubmit={this.onSubmit} className="countdown-form">
         <input
           type='text'
           placeholder='enter time in seconds'
           ref="seconds"
         />
        <button className="button expanded" > Start </button>
      </form>
    </div>
    )
  }

}
module.exports = CountdownForm;
