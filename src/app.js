import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';
import ngAnimate from 'angular-animate';

//include bootstrap
import 'bootstrap/dist/css/bootstrap.css';
//include fontawesome
import 'font-awesome/css/font-awesome.css';

//include modules
import homeModule from './home';
import aboutModule from './about';

//import navigational bar
import navbar from './directives/navbar.directive';

//include sass stylings
import './app.scss';

angular.module('app', [
  uirouter,
  ngSanitize,
  ngAnimate,
  homeModule,
  aboutModule,
  navbar,
]).config(($locationProvider,$urlRouterProvider) => {
  'ngInject';

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  }).hashPrefix('!');

  $urlRouterProvider.otherwise('/');
});
angular.bootstrap(document, ['app']);
