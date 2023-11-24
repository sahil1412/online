import axios from "axios";
let baseurl_wifi = 'http://192.168.1.56:5000/api/v1/userLogin';
let baseurl_LAN  = 'http://192.168.226.1:5000/api/v1/userLogin';

const loginApiCollections = 
{
    loginStudent:function(data){
        return fetch(`${baseurl_LAN}/student-login`,{
            method : "POST",
            headers : {
                "content-type" : "application/json",
            },
            body : JSON.stringify(data),
        })
    },
    loginfaculty:function(data){
        const rawResponse = axios.post(`${baseurl_LAN}/faculty-login`,data);
        return rawResponse;
    },

    fetchUserDetails:function(){
        return axios({
            "method" : "GET",
            "url" : `${baseurl_LAN}`,
            "headers" : {
                "content-type" : "application/json"
            }
        })
    },
    
}
export default loginApiCollections;