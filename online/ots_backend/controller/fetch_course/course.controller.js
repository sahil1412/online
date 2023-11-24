let config = require('../../config/config');

const sql = require("mssql");
var query;

const getAllCourseDetails=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .execute('sp_Course_list')
      let result=query.recordsets;
      res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}


module.exports = {
    getAllCourseDetails,
    
}