'use strict'

###*
 # @ngdoc function
 # @name yodemo2App.controller:MainCtrl
 # @description
 # # MainCtrl
 # Controller of the yodemo2App
###
angular.module('yodemo2App')
  .controller 'MainCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
