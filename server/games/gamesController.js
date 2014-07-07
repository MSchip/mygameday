var gameday = require('gameday-fetch');
var _ = require('underscore');

module.exports = {


  getGames: function(req, res, next){
  var teamKey = {
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
  }
    gameday.getGameIds(new Date(), function(err, results){
      var games = _.map(results, function(id){
        var home = teamKey[id.slice(15,21)];
        var away = teamKey[id.slice(22,28)];
        return[home, away, id];
      });
      res.send(games);
    });
  },

  getGame: function(req, res, next){
    

  }
}