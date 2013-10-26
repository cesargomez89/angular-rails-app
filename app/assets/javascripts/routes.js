angularRails.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/post', { templateUrl: '../assets/mainPost.html', controller: 'postController' } ).
    otherwise({ templateUrl: '../assets/mainIndex.html', controller: 'indexController' } );
}]);
