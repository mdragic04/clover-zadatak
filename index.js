const express = require('express');
const data = require('./zadatak.json')


const app = express();
const port = 3000;


//GET request to /tracks returs all tracks
app.get('/tracks', (req, res) => {
    res.json(data["tracks"]);
});

app.get('/tracks/:id', (req, res) => {
    const trackById = data["tracks"].data.find((t) => t.id === parseInt(req.params.id));
    res.json(trackById);

});

app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));
