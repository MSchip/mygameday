angular.module('mygameday.pitch', [])

.controller('PitchController', function($scope, $location, Games){
  $scope.data = {};
  $scope.loading = false;

  $scope.data.gid = ($location.path().slice(6, 36));

  $scope.changeToBox = function(gid){
    var url = '/game/'+gid+'/box';
    $location.path(url);
  }

  $scope.changeToPlay = function(gid){
    var url = '/game/'+gid;
    $location.path(url);
  }

  $scope.getPlays = function(gid){
    $scope.loading = true;
    Games.getPlays(gid)
    .then(function(result){
      $scope.data.plays = JSON.parse(result[1]);
      $scope.data.events = JSON.parse(result[0]);
      console.log('plays: ', $scope.data.plays)
      console.log('events: ',$scope.data.events)
      $scope.toGame = $scope.data.plays.data.game;
      $scope.loading = false;
    })
    .catch(function(error){
      console.log(error);
    })
  };

  $scope.getPlays($scope.data.gid);
  
});