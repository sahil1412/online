let Cookie  = require('js-cookie');

const RemoveCookie = (cookiename) =>{
    Cookie.remove(cookiename);
}

module.exports = {RemoveCookie}