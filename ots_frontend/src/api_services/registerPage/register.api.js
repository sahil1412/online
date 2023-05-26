import axios from "axios";
let baseurl = "http://localhost:5000/api/v1/registerations";

const registerApiCollections = 
{
    insertUserDetails:async function(data){
        const rawResponse =await  axios.post(`${baseurl}/student_registration`,data);
        return rawResponse;
    },
    insertFacultyDetails:async function(data){
        const rawResponse =await  axios.post(`${baseurl}/faculty_registration`,data);
        return rawResponse;
    }
}

export default registerApiCollections;