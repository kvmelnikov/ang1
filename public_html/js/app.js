/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

   angular.module('myApp', [])
    .run(function($rootScope) {
      // use .run to access $rootScope
      $rootScope.rootProperty = 'root scope';
    })
    .controller('ParentCtrl', function($scope) {
      // use .controller to access properties inside `ng-controller`
      // in the DOM omit $scope, it is inferred based on the current controller
      $scope.parentProperty = 'parent scope';
    })
    .controller('ChildCtrl', function($scope) {
      $scope.childProperty = 'child scope';
      // just like in the DOM, we can access any of the properties in the
      // prototype chain directly from the current $scope
      $scope.fullSentenceFromChild = 'Same $scope: We can access: ' +
                                     $scope.rootProperty + ' and ' +
                                     $scope.parentProperty + ' and ' +
                                     $scope.childProperty;
    });