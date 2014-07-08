angular.module('mygameday.box', [])

.controller('BoxController', function($scope, $location, Games){
  $scope.data = {};
  $scope.loading = false;

  $scope.data.gid = ($location.path().slice(6, 36))

  $scope.changeView = function(gid){
    var url = '/game/'+gid+'/pitch';
    $location.path(url);
  }

  $scope.changeToPlays = function(gid){
    var url = '/game/'+gid;
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
      $scope.home = $scope.toBox.home_sname;
      $scope.away = $scope.toBox.away_sname;
      $scope.boxHead = [[$scope.home, 'AB', 'R', 'H', 'RBI', 'BB', 'SO', 'LOB', 'AVG'], [$scope.away, 'AB', 'R', 'H', 'RBI', 'BB', 'SO', 'LOB', 'AVG']];
      $scope.boxHeadPitch = [[$scope.away, 'IP', 'H', 'R', 'ER', 'BB', 'SO', 'HR', 'ERA'], [$scope.home, 'IP', 'H', 'R', 'ER', 'BB', 'SO', 'HR', 'ERA']];
      $scope.loading = false;
      console.log($scope.data.box)
    })
    .catch(function(error){
      console.log(error);
    })
  }

  $scope.getGame($scope.data.gid);

});