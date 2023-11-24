let config = require('../../config/config');
const sql = require('mssql');
var mssqlquery;

const admin_registeration = async(req,res) => {
    let inputs = req.body;
try{
    let pool = await sql.connect(config);
    mssqlquery = await pool.request()
    .input('username',sql.VarChar,inputs.username)
    .input('password_',sql.VarChar,inputs.password_)
    .input('full_Name',sql.VarChar,inputs.full_Name)
    .input('subject_code',sql.VarChar,inputs.subject)
    .input('experience',sql.Int,inputs.experience)
    .input('father_name',sql.VarChar,inputs.father_name)
    .input('p_address',sql.VarChar,inputs.p_address)
    .input('c_address',sql.VarChar,inputs.c_address)
    .input('Joining_date',sql.DateTime,inputs.Joining_date)
    .input('profile_image',sql.VarBinary(sql.MAX),new Buffer.from(inputs.profile_image))
    .execute('sp_Insert_faculty_details')
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
    admin_registeration
}