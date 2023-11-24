let express = require('express');
let router = express.Router();
let get_courseList = require('../../controller/fetch_course/course.controller');

let {authenticationToken} = require('../../jwt.Auth');

router.get('/list',authenticationToken,get_courseList.getAllCourseDetails);
// router.get('./list',get_courseList.getDetails);

module.exports = router;