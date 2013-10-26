angularRails.controller('indexController',['$http', '$scope', '$location', function($scope, $http, $location){
  console.log('asdad');

  $scope.viewPost = function(){
    console.log('asd');
    $location.url('/post');
  };

}]);
