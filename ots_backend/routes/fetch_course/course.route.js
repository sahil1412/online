let express = require('express');
let router = express.Router();
let get_courseList = require('../../controller/fetch_course/course.controller');

router.get('/list',get_courseList.getAllCourseDetails);

module.exports = router;