angular.module('mygameday', [
  'mygameday.services',
  'mygameday.games',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider){
  $routeProvider
    .when('/', {
      template: 'app/games/games.html',
      controller: 'GamesController'
    })
})