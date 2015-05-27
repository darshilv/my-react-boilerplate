'use strict';

var React = require('react');

var Router = require('react-router');
var Route = Router.Route;
var DefualtRoute = Router.DefualtRoute;
var NotFoundRoute = Router.NotFoundRoute;

var App = require('./app/root');
var Home = require('./app/pages/Home');

require('./scss/_boot.scss');

var routes = (
  <Route handler={App}>
    <Route name="home" path="/" handler={Home} />
    
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
