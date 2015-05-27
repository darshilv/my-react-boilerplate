'use strict';

var React = require('react');
var Reflux = require('reflux');
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({
  getActiveRoute () {
    return this.getRoutes().reverse()[0].name;
  },

  render : function() {
    return (
      <div>
        <h1>Hello, Darshil from App.</h1>
        <section className="appContent">
          <TransitionGroup transitionName="example" transitionEnter={true} transitionLeave={false}>
            <RouteHandler />
          </TransitionGroup>
        </section>
      </div>
    );
  }
});