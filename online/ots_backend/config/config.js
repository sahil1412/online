require('dotenv').config();
const config = {
    user : process.env.user,
    password : process.env.password,
    server : "192.168.199.1",
    database : 'online_Edu',
    options:{
        trustedconnection : true,
        enableArithAbort : true,
        trustServerCertificate : true
    },
    port : 1433
}

module.exports = config;