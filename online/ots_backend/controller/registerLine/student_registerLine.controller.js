let config = require('../../config/config');
const sql = require('mssql');
// const Buffer = require('node:buffer');
var mssqlquery;

const student_registeration = async(req,res) => {
    let inputs = req.body;
    try{
    let pool = await sql.connect(config);
    mssqlquery = await pool.request()
    .input('username',sql.VarChar,inputs.username)
    .input('password_',sql.VarChar,inputs.password_)
    .input('full_Name',sql.VarChar,inputs.full_Name)
    .input('course',sql.VarChar,inputs.course)
    .input('father_name',sql.VarChar,inputs.father_name)
    .input('p_address',sql.VarChar,inputs.p_address)
    .input('c_address',sql.VarChar,inputs.c_address)
    .input('course_Joining_date',sql.DateTime,inputs.course_Joining_date)
    .input('course_starting_date',sql.DateTime,inputs.course_starting_date)
    .input('profile_image',sql.VarBinary(sql.MAX),new Buffer.from(inputs.profile_image))
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
}
}

module.exports = {
    student_registeration
}