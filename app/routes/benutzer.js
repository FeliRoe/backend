const control = require('../execute/benutzer'); // ändern
const router = require('express').Router();

// Alles ändern
router
  .get('/', control.holAlles)
  .get('/:id', control.holEins)
  .post('/', control.erstellEins)
  .put('/:id', control.aktualisierEins)
  .delete('/:id', control.loeschEins);

module.exports = router;
