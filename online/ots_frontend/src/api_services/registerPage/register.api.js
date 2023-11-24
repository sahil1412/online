import axios from "axios";
let baseurl_wifi = "http://192.168.1.178:5000/api/v1/registerations";
let baseurl_LAN  = 'http://192.168.226.1:5000/api/v1/registerations';

const registerApiCollections = 
{
    insertUserDetails:async function(data){
        const rawResponse =await  axios.post(`${baseurl_LAN}/student_registration`,data);
        return rawResponse;
    },
    insertFacultyDetails:async function(data){
        const rawResponse =await  axios.post(`${baseurl_LAN}/faculty_registration`,data);
        return rawResponse;
    }
}

export default registerApiCollections;