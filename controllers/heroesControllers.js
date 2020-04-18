const controllerHeroes = {
    listado: (req, res) => {
              res.send(heroes);
             },
    detalleId: (req, res) => {
                let heroeId = req.params.id;
                let heroeBuscado = buscarHeroeId(heroeId);
                if (heroeBuscado) {
                    res.send(`Hola, mi nombre es ${heroeBuscado.nombre} y soy ${heroeBuscado.profesion}`);
                } else {
                    res.send('Heroe no encontrado');
                  };
                },
    biografia: (req, res) => {
                let heroeId = req.params.id;
                let frase = req.params.ok;
                let heroeBuscado = buscarHeroeId(heroeId);
                    if (heroeBuscado) {
                       if (frase === 'ok') {
                         res.send(`Mi nombre es ${heroeBuscado.nombre} y mi reseña es ${heroeBuscado.resenia}`);
                        } else {
                           res.send('Lamento que no desees saber mas de mi :(');
                          };
                    } else {
                       res.send('No encontramos un Heroe para mostrarte su biografia');
                      }
    }
};
function buscarHeroeId(heroeId){
    heroes.find(function (heroe) {
        return heroeId == heroe.id;
        }
    )};

module.exports = controllerHeroes;