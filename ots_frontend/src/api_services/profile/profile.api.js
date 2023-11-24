import axios from "axios";
let baseurl_wifi = 'http://192.168.1.178:5000/api/v1/profile';
let baseurl_LAN  = 'http://192.168.226.1:5000/api/v1/profile';

const profileApiCollections = 
{
    fetchCProfile:function(Id){
        return axios({
            "method" : "GET",
            "url" : `${baseurl_LAN}/${Id}`,
            "headers" : {
                "content-type" : "application/json",
                'x-access-token':localStorage.getItem('login'),
            }
        })
    },
    
}
export default profileApiCollections;