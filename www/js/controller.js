angular.module('starter', [])
.controller('myhome', function($scope, $ionicPopover)
{
    $ionicPopover.fromTemplateUrl('templates/home.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });

});