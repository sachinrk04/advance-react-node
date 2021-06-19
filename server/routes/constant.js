const express = require('express');
const bodyParser = require('body-parser')

const objective = require('../controllers/constant');

const router = express.Router();
router.use(bodyParser.json());

router.get('/merchant/objective', objective.getMerchantObjective);

module.exports = router;