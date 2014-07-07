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

  return{
    getGames: getGames
  };

})