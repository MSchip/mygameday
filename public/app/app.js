angular.module('mygameday', [
  'mygameday.services',
  'mygameday.games',
  'mygameday.game',
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
    // .otherwise({
    //   redirectTo: '/'
    // })
})