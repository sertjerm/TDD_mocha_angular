'use strict';

var angular = require('angular');

var app = angular.module("ngApp", []);

app.controller("rootCtrl", [ "$scope"
    , function ($scope) {
        $scope.b = "222222";
        $scope.firstTest = function(x){
            return x;
        }
    }]);