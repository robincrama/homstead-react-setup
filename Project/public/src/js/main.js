"use strict";

// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var HelloWorld = require('./modules/helloworld');

$(function(){
  var mainElement = document.getElementById('main');
  ReactDOM.render(React.createElement(HelloWorld.default), mainElement);
});