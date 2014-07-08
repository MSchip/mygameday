angular.module('mygameday.box', [])

.controller('BoxController', function($scope, $location, Games){
  $scope.data = {};
  $scope.loading = false;

  $scope.data.gid = ($location.path().slice(6, 36))

  $scope.changeView = function(gid){
    var url = '/game/'+gid+'/pitch';
    $location.path(url);
  }

  //play by play
  $scope.getGame = function(gid){
    $scope.loading = true;
    Games.getGame(gid)
    .then(function(result){
      $scope.data.events = JSON.parse(result[0]);
      $scope.data.box = JSON.parse(result[1]);
      $scope.loading = false;
      console.log($scope.data.box)
    })
    .catch(function(error){
      console.log(error);
    })
  }

  $scope.getGame($scope.data.gid);

});