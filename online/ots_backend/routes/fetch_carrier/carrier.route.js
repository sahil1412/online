let express = require('express');
let router = express.Router();
let get_carrierList = require('../../controller/fetch_carrier/carrier.controller');

router.get('/list',get_carrierList.getAllCarrierDetails);
router.get('/list/:Id',get_carrierList.getopeningDetails);
// router.get('./list',get_courseList.getDetails);

module.exports = router;