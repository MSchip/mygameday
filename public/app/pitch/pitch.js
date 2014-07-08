angular.module('mygameday.pitch', [])

.controller('PitchController', function($scope, $location, Games){
  $scope.data = {};
  $scope.loading = false;

  $scope.data.gid = ($location.path().slice(6, 36));

  $scope.getPlays = function(gid){
    $scope.loading = true;
    Games.getPlays(gid)
    .then(function(result){
      $scope.data.plays = result;
      console.log($scope.data.plays.data.game)
      $scope.loading = false;
    })
    .catch(function(error){
      console.log(error);
    })
  };

  $scope.getPlays($scope.data.gid);
  
});