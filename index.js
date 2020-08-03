const express = require('express');
const data = require('./zadatak.json')

const app = express();
const port = 3000;

//GET tracks sorted by name or duration
app.get('/tracks/sorted', (req, res) => {
    let tracksSorted = data["tracks"];

    if (req.query.sortBy === "name") {
        tracksSorted.data.sort((a, b) => (a.title.localeCompare(b.title)));
    } else if (req.query.sortBy === "duration") {
        tracksSorted.data.sort((a, b) => a.duration - b.duration);
    } else {
        res.status(501).send("This sort method not supported.");
        return;
    }

    res.json(tracksSorted);
});

//GET request to /tracks returs all tracks
app.get('/tracks', (req, res) => {
    res.json(data["tracks"]);
});

//GET track by id
app.get('/tracks/:id', (req, res) => {
    const trackById = data["tracks"].data.find((t) => t.id === parseInt(req.params.id));
    res.json(trackById);

});

app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));
