angular.module('mygameday.game', [])

.controller('GameController', function($scope, $location, Games){
  $scope.data = {};
  $scope.loading = false;

  $scope.data.gid = ($location.path().slice(6))

  $scope.changeView = function(gid){
    var url = '/game/'+gid+'/pitch';
    $location.path(url);
  }

  $scope.changeBox = function(gid){
    var url = '/game/'+gid+'/box';
    $location.path(url);
  }
  
  //play by play
  $scope.getGame = function(gid){
    $scope.loading = true;
    Games.getGame(gid)
    .then(function(result){
      $scope.data.events = JSON.parse(result[0]);
      $scope.data.box = JSON.parse(result[1]);
      $scope.toBox = $scope.data.box.data.boxscore;
      $scope.data.status_ind = $scope.toBox.status_ind;
      $scope.linescore = $scope.toBox.linescore.inning_line_score;
      $scope.linescore.unshift({"home": $scope.toBox.home_fname, "away":$scope.toBox.away_fname, "inning": ""})
      $scope.linescore.push({"home": $scope.toBox.linescore.home_team_runs, "away":$scope.toBox.linescore.away_team_runs, "inning": "R"})
      $scope.linescore.push({"home": $scope.toBox.linescore.home_team_hits, "away":$scope.toBox.linescore.away_team_hits, "inning": "H"})
      $scope.linescore.push({"home": $scope.toBox.linescore.home_team_errors, "away":$scope.toBox.linescore.away_team_errors, "inning": "E"})
      $scope.loading = false;
    })
    .catch(function(error){
      console.log(error);
    })
  }

  $scope.getGame($scope.data.gid);

});