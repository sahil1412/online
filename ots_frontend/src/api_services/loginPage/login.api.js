import axios from "axios";
let baseurl = 'http://localhost:5000/api/v1/userLogin';

const loginApiCollections = 
{
    insertUserDetails:function(data){
        const rawResponse = axios.post(`${baseurl}/loginLine`,data);
        return rawResponse;
    },

    fetchUserDetails:function(){
        return axios({
            "method" : "GET",
            "url" : `${baseurl}`,
            "headers" : {
                "content-type" : "application/json"
            }
        })
    },
    
}
export default loginApiCollections;