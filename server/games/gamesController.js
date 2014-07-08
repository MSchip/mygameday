var gameday = require('gameday-fetch');
var _ = require('underscore');
var request = require('request');
var utils = require('../helpers/utils.js');

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
    gameday.getGameIds(utils.dater(), function(err, results){
      var games = _.map(results, function(id){
        var home = teamKey[id.slice(15,21)];
        var away = teamKey[id.slice(22,28)];
        return[home, away, id];
      });
      res.send(games);
    });
  },

  getPlays: function(req, res, next){
    var gid = req.params.gid;

    var plays;

    var zeros = function(num) {
      num = num + '';
      return num.length >= 2 ? num : '0' + num;
    }

    var dateMaker = function(date){
      return 'year_'+date.getFullYear()+'/month_'+zeros(date.getMonth()+1)+'/day_'+zeros(date.getDate());
    };

    var playsUrl = 'http://gd2.mlb.com/components/game/mlb/' + dateMaker(utils.dater()) + '/' + gid + '/plays.json';
    var eventsUrl = 'http://gd2.mlb.com/components/game/mlb/' + dateMaker(utils.dater()) + '/' + gid + '/game_events.json';

    request.get(playsUrl, function(error, response, results) {
      if(error){
        console.log(error);
      } 
      plays = results;
    });

    request.get(eventsUrl, function(error, response, results) {
      if(error){
        console.log(error);
      } 
      res.send([results, plays]);
    });

  },

  getGame: function(req, res, next){
    var gid = req.params.gid;

    var zeros = function(num) {
      num = num + '';
      return num.length >= 2 ? num : '0' + num;
    }

    var dateMaker = function(date){
      return 'year_'+date.getFullYear()+'/month_'+zeros(date.getMonth()+1)+'/day_'+zeros(date.getDate());
    };
    var gameUrl = 'http://gd2.mlb.com/components/game/mlb/' + dateMaker(utils.dater()) + '/' + gid + '/game_events.json';
    var boxUrl = 'http://gd2.mlb.com/components/game/mlb/' + dateMaker(utils.dater()) + '/' + gid + '/boxscore.json';

    var box;

    request.get(boxUrl, function(error, response, results) {
      if(error){
        console.log(error);
      } 
      box = results;
    });

    request.get(gameUrl, function(error, response, results) {
      if(error){
        console.log(error);
      }
      res.send([results, box]);
    });

  }
}