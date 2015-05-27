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
    <DefaultRoute handler={Home} />
    <NotFoundRoute handler={NotFound} />
    <Route name="home" path="/" handler={Home} />
    <Route name="projects" path="/projects" handler={Projects} >
      <Route name="project" path="/project/:projectId" handler={Project} />
      <NotFoundRoute handler={ProjectNotFound} />
    </Route>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
