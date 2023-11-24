import React,{useState,useEffect} from 'react';
import carrierApiCollections from "../../api_services/carrier/carrier.api";
import Carrier_Details from "./details";

const Carrier = () =>{
    const [carrierlist,setcarrierlist] = useState([]);
    const result = [];
    const fetchcarrierList = React.useCallback(() =>{
        carrierApiCollections.fetchCarrierList()
        .then((response) => {
            // console.log(response.data)
            setcarrierlist(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])
    useEffect(() => {
        fetchcarrierList()
    },[fetchcarrierList]);

    return (
       <div> 
{carrierlist.map((carrier,id) => {
  return (
    <div key={id} className="w-5/6 p-4 md:w-2/3 md:p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-16 mx-auto justify-center items-center">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{carrier.subject_name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{carrier.class_}</p>
        <a href={`/carrier/${carrier.Id}`} className="sm:w-auto inline-flex items-center justify-center md:flex px-8 py-3 text-xs lg:text-xl font-medium rounded-md text-white bg-green-700 shadow uppercase hover:bg-green-800 hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg active:bg-green-900">
            Details
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
  )
})}
</div>
    )
}
export default Carrier