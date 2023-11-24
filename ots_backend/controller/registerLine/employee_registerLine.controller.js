let config = require('../../config/config');
const sql = require('mssql');
var mssqlquery;

const emp_registeration = async(req,res) => {
    let inputs = req.body;
    console.log(inputs);
    let username = inputs.user_name;
    let full_Name = inputs.first_name+" "+inputs.last_name;
    let password_ = inputs.password;
    let subject_code = inputs.subject_code;
    let experience = inputs.experience;
    let father_name = inputs.father_name;
    let p_address = inputs.parmanent_address+" "+inputs.parmanent_district+" "+inputs.parmanent_state+" "+inputs.parmanent_pincode;
    let c_address = inputs.current_address+" "+inputs.current_district+" "+inputs.current_state+" "+inputs.current_pincode;
    let Joining_date = inputs.Joining_date;
try{
    let pool = await sql.connect(config);
    mssqlquery = await pool.request()
    .input('username',sql.VarChar,username)
    .input('password_',sql.VarChar,password_)
    .input('full_Name',sql.VarChar,full_Name)
    .input('subject_code',sql.VarChar,subject_code)
    .input('experience',sql.Int,experience)
    .input('father_name',sql.VarChar,father_name)
    .input('p_address',sql.VarChar,p_address)
    .input('c_address',sql.VarChar,c_address)
    .input('Joining_date',sql.DateTime,Joining_date)
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
    emp_registeration
}