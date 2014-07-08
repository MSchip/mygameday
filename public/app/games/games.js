angular.module('mygameday.games', [])

.controller('GamesController', function($scope, $location, Games){
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

  $scope.changeView = function(gid){
    var url = '/game/'+gid;
    $location.path(url);
  }

  // $scope.getGame = function(gid){
  //   Games.getGame(gid)
  //   .then(function(result){
  //     console.log(result);
  //   })
  //   .catch(function(error){
  //     console.log(error);
  //   })
  // }

  $scope.getGames();
});