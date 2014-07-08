angular.module('mygameday.game', [])

.controller('GameController', function($scope, $location, Games){
  $scope.data = {};
  $scope.loading = false;

  $scope.data.gid = ($location.path().slice(6))
  
  //play by play
  $scope.getGame = function(gid){
    $scope.loading = true;
    Games.getGame(gid)
    .then(function(result){
      $scope.data.events = result;
      $scope.loading = false;
    })
    .catch(function(error){
      console.log(error);
    })
  }

  //get box score
  $scope.getBox = function(gid){
    $scope.loading = true;
    Games.getBox(gid)
    .then(function(result){
      $scope.data.box = result;
      $scope.loading = false;
    })
    .catch(function(error){
      console.log(error);
    })
  }

  $scope.getGame($scope.data.gid);

});