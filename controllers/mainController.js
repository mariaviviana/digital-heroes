const controllerMain = {
    frase : function (req, res) {
             res.send('Ni Superman Iron Man o La Mujer Maravilla son tan importantes como las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiracion para poder cumplir tus objetivos. Recuerda nunca pares de creer en ti');
            },
    creditos : (req, res) => {
               res.send('Muy bueno hacer estos trabajos en equipo para re-afirmar lo aprendido');
               },
    default : (req, res) => {
                res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
              }
};
module.exports = controllerMain;