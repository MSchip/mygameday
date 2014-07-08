angular.module('mygameday', [
  'mygameday.services',
  'mygameday.games',
  'mygameday.game',
  'mygameday.pitch',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'app/games/games.html',
      controller: 'GamesController'
    })
    .when('/game/:gid', {
      templateUrl: 'app/game/game.html',
      controller: 'GameController'
    })
    .when('/game/:gid/pitch', {
      templateUrl: 'app/pitch/pitch.html',
      controller: 'PitchController'
    })
    // .otherwise({
    //   redirectTo: '/'
    // })
})