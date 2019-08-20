var keys = require("./keys");
var axios = require("axios");
var moment = require("moment");
var Spotify = require('node-spotify-api');
var fs = require("fs");
var spotify = new Spotify({
  id: keys.spotify.id,
  secret: keys.spotify.secret,
});

var userInput = process.argv;
var inputTopic = process.argv[2];


switch (inputTopic){
    case "concert-this":
        break;
    
    case "spotify-this-song":
        break;
    
    case "movie-this":
        break;

    case "do-what-it-says":
        break;
}