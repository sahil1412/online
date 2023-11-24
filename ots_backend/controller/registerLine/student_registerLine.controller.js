let config = require('../../config/config');
const sql = require('mssql');
var mssqlquery;

const student_registeration = async(req,res) => {
    let inputs = req.body;
    console.log(inputs);
    /*let username = inputs.user_name;
    let full_Name = inputs.first_name+" "+inputs.last_name;
    let password_ = inputs.password;
    let course = inputs.course;
    let father_name = inputs.father_name;
    let p_address = inputs.parmanent_address+" "+inputs.parmanent_district+" "+inputs.parmanent_state+" "+inputs.parmanent_pincode;
    let c_address = inputs.current_address+" "+inputs.current_district+" "+inputs.current_state+" "+inputs.current_pincode;
    let course_Joining_date = inputs.course_Joining_date;
    let course_starting_date = inputs.course_starting_date;
try{
    let pool = await sql.connect(config);
    mssqlquery = await pool.request()
    .input('username',sql.VarChar,username)
    .input('password_',sql.VarChar,password_)
    .input('full_Name',sql.VarChar,full_Name)
    .input('course',sql.VarChar,course)
    .input('father_name',sql.VarChar,father_name)
    .input('p_address',sql.VarChar,p_address)
    .input('c_address',sql.VarChar,c_address)
    .input('course_Joining_date',sql.DateTime,course_Joining_date)
    .input('course_starting_date',sql.DateTime,course_starting_date)
    .execute('sp_Insert_Users_details')
    .then((result)=>
    {
        if(result)
        {
            res.json(
                {
                    result : result,
                    success: true,
                    message : "Successful registered"
                }
            )
        }
        else{
            res.json(
                {
                    success : false,
                    message : "registeration fails"
                }
            )
        }
    })
    
}
catch(err)
{
    console.log(err);
}*/
}

module.exports = {
    student_registeration
}