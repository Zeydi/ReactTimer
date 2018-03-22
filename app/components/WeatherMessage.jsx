const React = require('react');

const WeatherMessage = (props) => {
  var {temp, location} = props
    return (
      <h2 className="text-center">It is {temp} in {location}</h2>
    );
  }


module.exports = WeatherMessage;
