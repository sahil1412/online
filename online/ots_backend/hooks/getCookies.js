let Cookie  = require('js-cookie');

const GetCookie = (cookiename) =>{
    return Cookie.get(cookiename);
}

module.exports = {GetCookie};