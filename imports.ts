const
    React = require("react"),
    ReactDOM = require("react-dom"),
    {BrowserRouter, Route} = require('react-router-dom'),
    $ = require("jquery"),
    toastr: Toastr = require("toastr"),
    dt = require('datatables.net'),
    numeral = require('numeral');

require('bootstrap');
require("babel-polyfill");

require('./imports.scss');
require('../components/render');

export {React, ReactDOM, BrowserRouter, Route, $, toastr, dt, numeral};