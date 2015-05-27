'use strict';

var React = require('react');

var Router = require('react-router');
var Route = Router.Route;
var DefualtRoute = Router.DefualtRoute;
var NotFoundRoute = Router.NotFoundRoute;

var App = require('./app/root');
var Home = require('./app/pages/Home');
var Projects = require('./app/pages/Projects');
var Project = require('./app/pages/Project');
var ProjectNotFound = require('./app/pages/ProjectNotFound');
var NotFound = require('./app/pages/NotFound');

require('./scss/_boot.scss');

var routes = (
  <Route handler={App}>
    <Route name="home" path="/" handler={Home} />
    <Route name="projects" path="/projects" handler={Projects} >
      <Route name="project" path="/project/:projectId" handler={Project} />
      <NotFoundRoute handler={ProjectNotFound} />
    </Route>
    <NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
