let config = require('../../config/config');
let { createTokens, authenticationToken } = require('../../jwt.Auth');
const sql = require("mssql");

let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');

require('dotenv').config();



const student_Login = async (req,res) => 
{   
    console.log("Student");
    const inputs = req.body;
    try
    {
      let pool=await sql.connect(config);
      await pool.request()
      .input('username',sql.VarChar,inputs.username)
      .input('password_',sql.VarChar,inputs.password)
      .query(`SELECT * FROM active_users_details where username = @username and password_ = @password_`)
    //   
        .then((result)=>
        {
            // console.log(result.recordset[0]);
            if(result.recordset[0])
            {
                const cred = {
                    username : result.recordset[0].username,
                    password : result.recordset[0].password_,
                    id : result.recordset[0].Id
                    // role : result.recordset[0].userType
                }
                //console.log(username + " " + password + "   "+id);
                const accessToken = createTokens(cred);
                // console.log(accessToken);
                res.json({auth:true,accessToken:accessToken,username:result.recordset[0].username,userPic:result.recordset[0].userPic,Id:result.recordset[0].Id})
            }
            else{
                res.status(400).json(
                    {
                        success : false,
                        message : "Invalid credentials"
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
const faculty_Login = async (req,res) => 
{
    console.log("Faculty");
    const inputs = req.body;
    try
    {
      let pool=await sql.connect(config);
      await pool.request()
      .input('username',sql.VarChar,inputs.username)
      .input('password_',sql.VarChar,inputs.password)
      .query(`SELECT * FROM faculty_details where username = @username and password_ = @password_`)
      .then((result)=>
        {
            // console.log(result.recordset[0]);
            if(result.recordset[0])
            {
                const cred = {
                    username : result.recordset[0].username,
                    password : result.recordset[0].password_,
                    id : result.recordset[0].Id
                    // role : result.recordset[0].userType
                }
                //console.log(username + " " + password + "   "+id);
                const accessToken = createTokens(cred);
                // console.log(accessToken);
                res.json({auth:true,accessToken:accessToken,username:result.recordset[0].username,userPic:result.recordset[0].userPic,Id:result.recordset[0].Id})
            }
            else{
                res.status(400).json(
                    {
                        success : false,
                        message : "Invalid credentials"
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

const getAllUerDetails=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      await pool.request()
      .query("SELECT * FROM active_users_datails")
      let result=query.recordsets;
      res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports = {
    student_Login,
    faculty_Login,
    getAllUerDetails,
}