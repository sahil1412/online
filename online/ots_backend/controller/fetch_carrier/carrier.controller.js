let config = require('../../config/config');

const sql = require("mssql");
var query;

const getAllCarrierDetails=async(req,res)=>
{
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .execute('sp_carrier_list')
      let result=query.recordsets;
      res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}

const getopeningDetails=async(req,res)=>
{
    let Id = req.params.Id;
    try
    {
      let pool=await sql.connect(config);
      query= await pool.request()
      .query(`select * from vw_carrier_details where Id = ${Id}`)
      let result=query.recordsets;
      res.send(result[0]);
    }
    catch(err)
    {
        console.log(err);
    }
}


module.exports = {
    getAllCarrierDetails,
    getopeningDetails,
    
}