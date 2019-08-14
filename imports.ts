const
    React = require("react"),
    ReactDOM = require("react-dom"),
    ReactRouterDOM = require('react-router-dom'),
    $ = require("jquery"),
    toastr = require("toastr"),
    dt = require('datatables.net'),
    numeral = require('numeral')
;

require('bootstrap');
require("babel-polyfill");

require('./imports.scss');
require('../components/render');

export {React, ReactDOM, $, toastr, dt, numeral, ReactRouterDOM};