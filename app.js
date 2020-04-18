const express = require('express');

const fs = require('fs');

const app = express();

app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

// Ruta Raíz / ➝ Home
app.get('/', function (req, res) {
	res.send('Ni Superman Iron Man o La Mujer Maravilla son tan importantes como las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiracion para poder cumplir tus objetivos. Recuerda nunca pares de creer en ti');
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', (req, res) => {
	res.send(heroes);
});

// Ruta /heroes/detalle/id ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/detalle/:id', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroeId = req.params.id;
	let heroeBuscado = heroes.find(function (heroe) {
		return heroeId == heroe.id;
	});

	if (heroeBuscado) {
		res.send(`Hola, mi nombre es ${heroeBuscado.nombre} y soy ${heroeBuscado.profesion}`);
	} else {
		res.send('Heroe no encontrado');
	  };
	// Si se encuentra al héroe se envía el nombre y su profesión
	// Si NO se encuentra se envía el mensaje de no encontrado
});

// Ruta /heroes/bio/id/? ➝ se envía la bio del héroe solicitado
app.get('/heroes/bio/:id/:ok?', (req, res) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroeId = req.params.id;
	let frase = req.params.ok;
	let heroeBuscado = heroes.find(function (heroe) {
		return heroeId == heroe.id;
	});
	if (heroeBuscado) {
		if (frase === 'ok') {
			res.send(`Mi nombre es ${heroeBuscado.nombre} y mi reseña es ${heroeBuscado.resenia}`);
		} else {
			res.send('Lamento que no desees saber mas de mi :(');
		};
	} else {
		res.send('No encontramos un Heroe para mostrarte su biografia');
	}
});

	// Si NO se encuentra al héroe se envía un mensaje
	// Si se encuentra al héroe:
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error
	//}


// Ruta Créditos
// ¿?

app.get('/creditos', (req, res) => {
	res.send('Muy bueno hacer estos trabajos en equipo para re-afirmar lo aprendido');
});

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});