import React from "react";
import Map from "./map";

const location = {
    address: '2273/11 Nehru Colony, Rohtak, Haryana, 124001',
    lat:  28.907572,
    lng:  76.565827,
  } 
const Contact = () =>{
    return (
         
<div className="w-4/5 items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-16 mx-auto justify-center items-center">    
<a href="#" class="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div class="flex flex-col p-4 m-4 md:m-12 leading-normal">
    <h5 class="mt-6 text-2xl font-headline tracking-tight font-bold text-gray-900 leading-snug"> Address : </h5>
        <p class="py-3 justify-center text-gray-600 text-lg">2273/11 Nehru Colony, Rohtak, Haryana</p>
    <h5 class="mt-6 text-2xl font-headline tracking-tight font-bold text-gray-900 leading-snug">Mobile Number : </h5>
        <p class="py-3 justify-center text-gray-600 text-lg">8708875261</p>
        <h5 class="mt-6 text-2xl font-headline tracking-tight font-bold text-gray-900 leading-snug">Mailing Address : </h5>
        <p class="py-3 justify-center text-gray-600 text-lg">Sahilkadian4@gmail.com</p>
    </div>
    <Map location={location} zoomLevel={17} />
</a>

</div>

    )
}
export default Contact;