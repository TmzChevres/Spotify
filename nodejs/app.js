//stuff to connect to app.js
const express = require('express');
const app = express();
const port = 5623;

const fs = require('fs');
const SpotifyWebApi = require('spotify-web-api-node');


// Read in the contents of the secure.json file
var secureData = fs.readFileSync('secure.json');
const secure = JSON.parse(secureData);

var spotifyApi = new SpotifyWebApi({
    clientId: secure.clientId,
    clientSecret: secure.clientSecret,
    redirectUri: 'https://peddiecs.peddie.org/live/Spotify/index.html'
});


//function to login user
//source: https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
app.get('/login', function (req, res) {
    var scope = "user-library-read";
    var state = randomString(16,abcdefghijklmnopqrstuvwxyz0123456789);

    res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: spotifyApi.clientId,
      scope: scope,
      redirect_uri: spotifyApi.redirectUri,
      state: state
    }));

});


// sets express to listen on local port 5623
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// test to make sure it is working
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//return a random string of a given length using the given character set
function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}