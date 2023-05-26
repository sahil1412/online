import axios from "axios";
let baseurl = 'http://localhost:5000/api/v1/courses';

const courseApiCollections = 
{
    fetchCoursesDetails:function(){
        return axios({
            "method" : "GET",
            "url" : `${baseurl}/list`,
            "headers" : {
                "content-type" : "application/json"
            }
        })
    },
    
}
export default courseApiCollections;