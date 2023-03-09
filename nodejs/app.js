//stuff to connect to app.ks
const express = require('express');
const app = express();
const port = 5623;

const fs = require('fs');
const SpotifyWebApi = require('spotify-web-api-node');


// Read in the contents of the secure.json file
var secureData = fs.readFileSync('secure.json');
const secure = JSON.parse(secureData);

var spotifyApi = new SpotifyWebApi({
  clientId : secure.clientId,
  clientSecret : secure.clientSecret,
});

console.log(spotifyApi);



// sets express to listen on local port 5623
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// test to make sure it is working
app.get('/', (req, res) => {
    res.send('Hello World!');
});