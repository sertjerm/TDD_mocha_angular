// var jsdom = require('jsdom').jsdom;

// global.document = jsdom('<html><head><script></script></head><body></body></html>');
// global.window = global.document.parentWindow;
// global.navigator = window.navigator = {};
// global.Node = window.Node;

// global.window.mocha = {};
// global.window.beforeEach = beforeEach;
// global.window.afterEach = afterEach;

// /*
//  * Only for Bower users
//  */
// require('../bower_components/angular');
// require('../bower_components/angular-mocks');

// /*
//  * Only for NPM users
//  */
// // require('angular/angular');
// // require('angular-mocks');

// global.angular = window.angular;
// global.inject = global.angular.mock.inject;
// global.ngModule = global.angular.mock.module;

'use strict';

var jsdom = require('jsdom').jsdom;

var document = global.document = jsdom('<html><head></head><body></body></html>');
var window = global.window = document.defaultView;


global.navigator = window.navigator = {};
global.Node = window.Node;

/*
 * angular-mocks
 */

window.mocha = {};
window.beforeEach = global.beforeEach;
window.afterEach = global.afterEach;


/*
 * Since angular and angular-mocks are both singletons created once with one window-object
 * and mocha doesn't reload modules from node_modules on watch mode we'll have to
 * invalidate the cached singletons manually.
 */

delete require.cache[require.resolve('angular')];
delete require.cache[require.resolve('angular/angular')];
delete require.cache[require.resolve('angular-mocks')];

require('angular/angular');
require('angular-mocks');

global.angular = window.angular;

module.exports = {
  inject: window.angular.mock.inject,
  module: window.angular.mock.module
};