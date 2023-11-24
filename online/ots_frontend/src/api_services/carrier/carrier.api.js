import axios from "axios";
let baseurl_wifi = 'http://192.168.1.178:5000/api/v1/carrier';
let baseurl_LAN  = 'http://192.168.226.1:5000/api/v1/carrier';

const carrierApiCollections = 
{
    fetchCarrierList:function(){
        return axios({
            "method" : "GET",
            "url" : `${baseurl_LAN}/list`,
            "headers" : {
                "content-type" : "application/json"
            }
        })
    },
    fetchOpeningDetails:function(Id){
        return axios({
            "method" : "GET",
            "url" : `${baseurl_LAN}/list/${Id}`,
            "header" : {
                "content-type" : "application/json"
            }
        })
    }
    
}
export default carrierApiCollections;