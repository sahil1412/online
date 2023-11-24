let express = require('express');
let router = express.Router();
let registerLineController_user = require('../../controller/registerLine/student_registerLine.controller');
let registerLineController_facult = require('../../controller/registerLine/employee_registerLine.controller');

router.post('/student_registration',registerLineController_user.student_registeration);
router.post('/faculty_registration',registerLineController_facult.emp_registeration);

module.exports = router;