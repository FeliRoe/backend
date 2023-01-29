const control = require('../execute/benutzer'); // ändern
const router = require('express').Router();

//Passt. Nicht ändern, da in excute benutzer.js angepasst!

router
  .get('/', control.getAllUsers)
  .get('/:id', control.getUserById)
  .post('/', control.createUser)
  .put('/:id', control.updateUser)
  .delete('/:id', control.deleteUser);

module.exports = router;
