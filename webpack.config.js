'use strict';

var webpack = require('webpack');

var env = process.env.NODE_ENV;
var configFactory = require('./.config/webpack.' + env);

module.exports = configFactory;