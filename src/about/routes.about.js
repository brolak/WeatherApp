routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  const about = {
    name: 'about',
    url: '/about',
    views: {
      Root: {
        template: require('./about.html'),
        controller: 'aboutController',
        controllerAs: 'about',
      },
    },
  };

  $stateProvider
    .state(about);
}
