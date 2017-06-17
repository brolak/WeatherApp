import angular from 'angular';
import routes from './routes.home';

import HomeController from './ctrl.home';
import weather from '../services/weather.service';

HomeController.$inject = ['$scope','weather'];

export default angular.module('app.home', [
	weather
	])
  .config(routes)
  .controller('homeController', HomeController)
  .name;