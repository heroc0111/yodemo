'use strict'

###*
 # @ngdoc function
 # @name yodemo2App.controller:AboutCtrl
 # @description
 # # AboutCtrl
 # Controller of the yodemo2App
###
angular.module('yodemo2App')
  .controller 'AboutCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
