let express = require('express');
let router = express.Router();
let loginLineCOntroller = require('../../controller/loginLine/loginLine.controller');
let { authenticationToken } = require('../../jwt.Auth');

require('dotenv').config();

router.post('/student-login',loginLineCOntroller.student_Login);
router.post('/faculty-login',loginLineCOntroller.faculty_Login);
router.get('/loginLine',authenticationToken,loginLineCOntroller.getAllUerDetails);

module.exports = router;