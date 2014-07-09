angular.module('mygameday.pitch', [])

.controller('PitchController', function($scope, $location, Games, $rootScope){
  $scope.data = {};
  $scope.loading = false;

  $scope.teamKey = {
    arimlb: 'D-Backs',
    atlmlb: 'Braves',
    balmlb: 'Orioles',
    bosmlb: 'Red Sox',
    chnmlb: 'Cubs',
    wasmlb: 'Nationals',
    houmlb: 'Astros',
    anamlb: 'Angels',
    kcamlb: 'Royals',
    clemlb: 'Indians',
    lanmlb: 'Dogers',
    colmlb: 'Rockies',
    miamlb: 'Marlins',
    slnmlb: 'Cardinals',
    milmlb: 'Brewers',
    cinmlb: 'Reds',
    nyamlb: 'Yankees',
    minmlb: 'Twins',
    phimlb: 'Phillies',
    pitmlb: 'Pirates',
    seamlb: 'Mariners',
    chamlb: 'White Sox',
    sfnmlb: 'Giants',
    sdnmlb: 'Padres',
    tbamlb: 'Rays',
    detmlb: 'Tigers',
    texmlb: 'Rangers',
    nynmlb: 'Mets',
    tormlb: 'Blue Jays',
    oakmlb: 'Athletics'
  };

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
      $scope.toInning = $scope.data.events.data.game.inning;
      $scope.toGame = $scope.data.plays.data.game;
      $scope.home = $scope.teamKey[gid.slice(22,28)];
      $scope.away = $scope.teamKey[gid.slice(15,21)];
      $scope.loading = false;
    })
    .catch(function(error){
      console.log(error);
    })
  };

  $scope.getPlays($scope.data.gid);
  
});