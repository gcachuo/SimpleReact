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
require('datatables.net-dt/css/jquery.dataTables.css');

require('./styles/index.scss');
require('./components');

export {React, ReactDOM, BrowserRouter, Route, $, toastr, dt, numeral};