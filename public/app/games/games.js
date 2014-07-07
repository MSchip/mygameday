angular.module('mygameday.games', [])

.controller('GamesController', function($scope, Games){
  $scope.data = {};

  $scope.getGames = function(){
    Games.getGames()
    .then(function(result){
      $scope.data.games = result;
    })
    .catch(function(error){
      console.log(error);
    })
  };

$scope.getGames();

})