import React,{useState,useEffect} from 'react';
import carrierApiCollections from "../../api_services/carrier/carrier.api";

const Carrier_Details = (props) =>{ 
    let str = props.location.pathname;
    const size = str.length;
    const [openingDetails,setOpeningDetails] = useState([]);
    
    const fetchopening = React.useCallback(() =>{
        carrierApiCollections.fetchOpeningDetails(str[size-1])
        .then((response) => {
            //console.log(response.data)
            setOpeningDetails(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])
    useEffect(() => {
        fetchopening()
    },[fetchopening]);

    return (
        <div> 
 {openingDetails.map((opening,id) => {
   return (
     <div key={id} className="w-5/6 p-4 md:w-2/3 md:p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-16 mx-auto justify-center items-center">
         <a href="#">
            <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Opening for the {opening.subject_name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Candidate is expert in {opening.class_} {opening.subject_name}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Qualification : <br/> {opening.Qualification}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Job Discription : <br/> {opening.job_discription}</p>

        <div className="mt-8 justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4" aria-level="3" role="button">
          <a
            className="sm:w-auto inline-flex items-center justify-center md:flex px-8 py-3 text-xs lg:text-xl font-medium rounded-md text-white bg-green-700 shadow uppercase hover:bg-green-800 hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg active:bg-green-900"
            href="/apply"
            >Apply</a
          >
          <a
            className=" sm:w-auto inline-flex items-center justify-center md:flex px-8 py-3 text-xs lg:text-xl ml-4 font-medium rounded-md text-green-700 bg-white shadow uppercase hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:shadow-lg"
            href="/carrier">Back</a>
        </div>
     </div>
   )
 })}
 </div>
    )

}
export default Carrier_Details;