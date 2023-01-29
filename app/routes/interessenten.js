const controller = require('../execute/interessenten');
const router = require('express').Router();

router
  .get('/', controller.holalles) 
  .get('/:inseratId', controller.getNumber) 
  .post('/', controller.intressezeigen)  

module.exports = router;