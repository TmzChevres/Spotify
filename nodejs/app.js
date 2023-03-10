//stuff to connect to app.js
const querystring = require('querystring');
const express = require('express');
const app = express();
const port = 5623;

const fs = require('fs');
const request = require('request');

// Read in the contents of the secure.json file
var secureData = fs.readFileSync('secure.json');
var secure = JSON.parse(secureData);

const clientId = secure.clientId
const clientSecret = secure.clientSecret;
const redirectUri = 'https://peddiecs.peddie.org/live/Spotify/web.html';


//login user (redirects to spotify login)
//source: https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
app.get('/login', function (req, res) {
    var scope = "user-top-read";
    // var state = randomString(16,'abcdefghijklmnopqrstuvwxyz0123456789');

    res.send('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'token',
            client_id: clientId,
            scope: scope,
            redirect_uri: redirectUri,
            // state: state
        }));
});


//Nodejs stuff-------------------------------------------------------------------------------------

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