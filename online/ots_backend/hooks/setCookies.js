let Cookie  = require('react-cookie');

const SetCookie = (cookiename,usrin) =>{
    Cookie.set(cookiename,usrin,{
        expires : 1, // i day
        secure : true,
        sameSite : 'strict',
        path : '/'
    })
}

module.exports = {SetCookie}