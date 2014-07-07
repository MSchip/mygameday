var gameday = require('gameday-fetch');

module.exports = {
  getGames: function(req, res, next){
    gameday.getGameIds(new Date(), function(err, results){
      res.send(results);
    });
  }
}