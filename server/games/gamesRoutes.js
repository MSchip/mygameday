var gamesController = require('./gamesController');

module.exports = function(app){

  app.get('/', gamesController.getGames);

  app.get('/:gid', gamesController.getGame);

}