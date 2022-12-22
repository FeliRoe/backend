const controller = require('../execute/intressenten');
const router = require('express').Router();


router
  .get('/', controller.getAll)
  .get('/:inseratId', controller.getAnzahl)
  .post('/', controller.intressemelden)
  .delete('/:id', controller.deleteOne);

module.exports = router;