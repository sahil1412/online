let express = require('express');
let router = express.Router();
let get_Profile = require('../../controller/fetch_profile/profile.controller');
let { authenticationToken } = require('../../jwt.Auth');

require('dotenv').config();
router.get('/:Id',authenticationToken,get_Profile.getProfile);
// router.get('./list',get_courseList.getDetails);

module.exports = router;