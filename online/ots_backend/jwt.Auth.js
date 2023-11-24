const { sign, verify } = require("jsonwebtoken");
let jwt = require('jsonwebtoken');
const createTokens = (data) => {
  const accessToken = jwt.sign(data,process.env.ACCESS_TOKEN_SECRET);
  return accessToken;
};


const authenticationToken=(req,res,next)=>{
    console.log(req.headers['x-access-token']);
  const authHeader=Object.values(JSON.parse(req.headers['x-access-token']))[1]
  const token = authHeader && authHeader.split(" ")[1]
  // const token=req.headers['x-access-token']
  if(token == null) {
  return res.sendStatus('not authenticated')
  }
  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
      if(err) return res.sendStatus(403)
      res.username=user
      next()
  })
}

module.exports = { createTokens, authenticationToken };