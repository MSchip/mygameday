var gamesController = require('./gamesController');

module.exports = function(app){

  app.get('/', gamesController.getGames);

  app.get('/:gid', gamesController.getGame);

  app.get('/:gid/path', gamesController.getPlays);

  app.get('/:gid/box', gamesController.getGame);


}