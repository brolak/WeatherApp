import angular from 'angular';

function navbar() {
  return {
    restrict: 'E',
    scope: {
      title: '@',
    },
    template: require('./navbar.html')
  }
}

export default angular.module('directives.navbar', [])
  .directive('navbar', navbar)
  .name;