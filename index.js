import express from 'express';
import fs from 'fs';


const app = express();
const port = 3000;

//Loading JSON file for later use
const data = JSON.parse(fs.readFileSync('zadatak.json'));

//GET request to /tracks returs all tracks
app.get('/tracks', (req, res) => {
    res.contentType('aplication/json');
    res.send(data["tracks"]);
});



app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));
