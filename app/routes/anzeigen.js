const excecute = require('../execute/anzeigen');
const router = require('express').Router();



router.get('/', excecute.alleAnzeigen)
router.get('/houses', excecute.Haeuser);
router.get('/construction-sites', excecute.ConstructionSites);
router.get('/apartments', excecute.Apartments);
router.get('/:id', excecute.specificAnzeige);  
router.post('/', excecute.erstelleAnzeige);
router.get('/:id', excecute.specificAnzeige);  
router.put('/:id', excecute.putAnzeige);
router.delete('/:id', excecute.loesche);
  

module.exports = router;
