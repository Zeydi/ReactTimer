const React = require('react');
var {Link, IndexLink} = require('react-router');

const Nav = React.createClass({

  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li>
              <IndexLink to="/" className="menu-text" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>ReactTimerApp</IndexLink>
            </li>
            <li>
              <Link to="/Timer" activeClassName="active-link" activeStyle={{fontWeight: 'bold' }}>Timer</Link>
            </li>
            <li>
              <Link to="/Countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Made by <a href="https://github.com/Zeydi/ReactTimer"  target="_blank">Oussema</a></li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Nav;
