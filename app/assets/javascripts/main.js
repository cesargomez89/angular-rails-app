var angularRails = angular.module('angularRails',[])

angularRails.config(['$routeProvider', ($routeProvider) ->
  $routeProvider
  .when('/post', { templateUrl: '../assets/mainPost.html', controller: 'PostCtrl' } )
  .otherwise({ templateUrl: '../assets/mainIndex.html', controller: 'IndexCtrl' } )

])
