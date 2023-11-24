let config = require('../../config/config');

const sql = require("mssql");
var query;

const getProfile=async(req,res)=>
{
    let Id = req.params.Id;
    //console.log(params);
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .query(`select * from active_users_details`)
      let result=query.recordsets;
      res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports = {
    getProfile,
}