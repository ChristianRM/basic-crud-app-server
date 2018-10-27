var express = require('express');
var router = express.Router();
const PersonController = require('../controllers/PersonController')


/* GET home page. */
router.get('/', PersonController.index)
router.post('/', PersonController.post)
router.put('/', PersonController.put)
router.delete('/', PersonController.delete)

module.exports = router;
