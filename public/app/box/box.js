angular.module('mygameday.box', [])

.controller('BoxController', function($scope, $location, Games){
  $scope.data = {};
  $scope.loading = false;
  $scope.boxHead = ['', 'AB', 'R', 'H', 'RBI', 'BB', 'SO', 'LOB', 'AVG'];
  $scope.boxHeadPitch = ['', 'IP', 'H', 'R', 'ER', 'BB', 'SO', 'HR', 'ERA'];

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
      $scope.data.batters = $scope.data.box.data.boxscore.batting;
      $scope.toBox = $scope.data.box.data.boxscore;
      $scope.data.status_ind = $scope.toBox.status_ind;
      $scope.loading = false;
      console.log($scope.toBox.pitching)
    })
    .catch(function(error){
      console.log(error);
    })
  }

  $scope.getGame($scope.data.gid);

});