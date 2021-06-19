const express = require('express');
const bodyParser = require('body-parser')

const testController = require('../controllers/test');

const router = express.Router();
router.use(bodyParser.json());

router.get('/test/objective', testController.getTest);

module.exports = router;