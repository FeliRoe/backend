const controller = require('../execute/interessenten'); // Ändern
const router = require('express').Router();

router
  .get('/', controller.holalles) // Bitte ändern
  .get('/:inseratId', controller.getNumber) // Bitte ändern
  .post('/', controller.intressezeigen) // Bitte ändern
  .delete('/:id', controller.loeschEins); //Bitte ändern

module.exports = router; // passt