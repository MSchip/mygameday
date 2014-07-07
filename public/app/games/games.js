angular.module('mygameday.games', [])

.controller('GamesController', function($scope, Games){
  $scope.data = {};
  $scope.loading = false;

  $scope.getGames = function(){
    $scope.loading = true;
    Games.getGames()
    .then(function(result){
      $scope.data.games = result;
      $scope.loading = false;
    })
    .catch(function(error){
      console.log(error);
    })
  };

  $scope.getGame = function(gid){
    Games.getGame(gid)
    .then(function(result){
      console.log(result);
    })
    .catch(function(error){
      console.log(error);
    })
  }

  $scope.getGames();
});