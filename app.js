const express = require('express');
const fs = require('fs');
const rutaHeroes = require('./routes/heroes.js');
const rutaMain = require('./routes/main.js');

const app = express();

app.listen(3030, () => console.log('Server running in 3030 port'));
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

app.use('/heroes', rutaHeroes);
app.use('/', rutaMain);
app.use('/creditos', rutaMain);
app.use('*', rutaMain);