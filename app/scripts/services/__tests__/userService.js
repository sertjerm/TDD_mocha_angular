
var helpers = require('../test-helper');//require('test-helper');
var ngModule = helpers.module;
var inject = helpers.inject;

// require('../userService');
require('../../controllers/rootController');

var expect = require('chai').expect;


//describe('ngApp', function() {
    //describe('ngApp rootCtrl', function() {
        beforeEach(ngModule('ngApp'));
        describe('ngApp rootCtrl firstTest()', function() {
            it('should rootCtrl.firstTest("samai")  be "samai"',
                inject(function($rootScope, $controller) {

                var scope = $rootScope.$new();
                var ctrl = $controller("rootCtrl", {$scope: scope });
               var result = scope.firstTest("samai");
                expect(result).to.deep.equal("samai");
            }));

             it('should rootCtrl.firstTest("oil")  be "oil"',
                inject(function($rootScope, $controller) {

                var scope = $rootScope.$new();
                var ctrl = $controller("rootCtrl", {$scope: scope });
               var result = scope.firstTest("oil");
                expect(result).to.deep.equal("oil");
            }));
        });
    //});
//});
