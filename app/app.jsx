const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');
const Timer = require('Timer');
const Countdown = require('Countdown');


//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
// App css
require('style!css!sass!applicationStyles')
ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Main}>
    <IndexRoute component={Timer}/>
    <Route path="Timer" component={Timer}/>
    <Route path="Countdown" component={Countdown}/>
  </Route>
</Router>,
  document.getElementById('app')
);
