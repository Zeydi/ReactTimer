const React = require('react');
var {Link, IndexLink} = require('react-router');

const Nav = React.createClass({

  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li>
              <IndexLink to="/" className="menu-text" activeClassName="active-link">ReactTimerApp</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active-link">Timer</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active-link">CountDown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Made by <a href="#"  target="_blank">Oussema</a></li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Nav;
