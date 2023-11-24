let express = require('express');
let router = express.Router();
let loginLineCOntroller = require('../../controller/loginLine/loginLine.controller');

router.post('/login',loginLineCOntroller.Details);
router.get('/loginLine',loginLineCOntroller.getAllUerDetails);

module.exports = router;