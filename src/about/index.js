import angular from 'angular';
import AboutController from './ctrl.about';
import routes from './routes.about';

AboutController.$inject = ['$scope'];

export default angular.module('app.about', [])
  .config(routes)
  .controller('aboutController', AboutController)
  .name;