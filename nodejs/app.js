// this should be at the top of app.js
const express = require('express');
const app = express();
const port = 5623;


// sets express to listen on local port 5622
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


// test to make sure it is working
app.get('/', (req, res) => {
    res.send('Hello World!');
});