angular.module('mygameday.services', [])

.factory('Games', function($http){

  var getGames = function(){
    return $http({
      method: 'GET',
      url: '/games'
    })
    .then(function(response){
      return response.data;
    })
  }

  var getGame = function(gid){
    return $http({ 
      method: 'GET',
      url: '/games/' + gid
    })
    .then(function(response){
      console.log(response.data)
      return response.data;
    })
  }

  var getBox = function(gid){
    return $http({ 
      method: 'GET',
      url: '/games/' + gid
    })
    .then(function(response){
      console.log(response.data)
      return response.data;
    })  
  }

  return{
    getGames: getGames,
    getGame: getGame,
    getBox: getBox
  };

})