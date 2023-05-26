let config = require('../../config/config');
const sql = require("mssql");
var query;

const Login = async (req,res) => 
{
    res.send("hello sahil")
}
const Details = async (req,res) => 
{
    console.log(req.body);
    res.json(req.body);
}

const getAllUerDetails=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
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
    Login,
    Details,
    getAllUerDetails,
}