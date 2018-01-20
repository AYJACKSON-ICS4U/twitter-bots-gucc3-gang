//Our bot that shows you the most recent tweet by @lilpump in the console

console.log('The bot is starting'); // Notifies you in the console that the bot is starting

var Twit = require('twit'); // Makes sure that the Twit package exists, otherwise, it wont work

var config = require('./config'); // Makes sure that the config file is there, then it gets the settings from that file
var T = new Twit(config);

var params = { // A variable that holds all of the parameters
  from: '@lilpump', // Collects 1 tweet from @LilPump
  count: 1
}

T.get('search/tweets', params, gotData); // Gets a tweet with the parameters defined in the *params* variable

function gotData(err, data, response) {
  var tweets = data.statuses; // Defines statuses as tweets
  for (var i = 0; i < tweets.length; i++) { // Outputs 1 tweet in the console
    console.log(tweets[i].text);
  }
}
