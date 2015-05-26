'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefualtRoute = Router.DefualtRoute;
var NotFoundRoute = Router.NotFoundRoute;

var App = React.createClass({
  render() {
    return (
      <h1>Hello, Darshil.</h1>
    );
  }
});

module.exports = App;