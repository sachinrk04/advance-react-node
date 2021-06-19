const express = require('express');
const router = express.Router();

var OORStatus = false;
var healthy = true;

router.get('/', function (req, res) {
    if (OORStatus) {
        return res.sendStatus(503);
    }
    else {
        return res.status(200).json({
            healthy: true
        });
    }
});

/* for taking out of rotation after deployement */
router.post('/internal/oor', function (req, res) {
    OORStatus = true;
    updateHealth(false);
    return res.sendStatus(200);
});

/* for bringing in rotation */
router.post('/internal/bir', function (req, res) {
    OORStatus = false;
    updateHealth(true);
    return res.sendStatus(200);
});

var updateHealth = function(status){
    healthy = status;
};

module.exports = router;
