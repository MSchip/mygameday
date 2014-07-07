var gamesController = require('./gamesController');

module.exports = function(app){

  app.get('/', gamesController.getGames);

}