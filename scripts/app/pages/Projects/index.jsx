'use strict';

var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');

module.exports = React.createClass({
  mixins:[Router.Navigation],
  getInitialState () {
    return {
      myVariable : "value"
    }
  },
  render : function() {
    console.log("in home page");
    return (
      <div>
        <h1>Hello, Darshil from Projects Home.</h1>
      </div>
    );
  }
});