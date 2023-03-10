const control = require('../execute/benutzer'); 
const router = require('express').Router();

!

router
  .get('/', control.getAllUsers)
  .get('/:id', control.getUserById)
  .post('/', control.createUser)
  .put('/:id', control.updateUser)
  .delete('/:id', control.deleteUser);

module.exports = router;
