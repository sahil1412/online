import axios from "axios";
let baseurl_wifi = 'http://192.168.1.178:5000/api/v1/courses';
let baseurl_LAN  = 'http://192.168.226.1:5000/api/v1/courses';
const courseApiCollections = 
{
    fetchCoursesDetails:function(){
        return axios({
            "method" : "GET",
            "url" : `${baseurl_LAN}/list`,
            "headers" : {
                "content-type" : "application/json",
                'x-access-token':localStorage.getItem('login'),
            }
        })
    },
    
}
export default courseApiCollections;