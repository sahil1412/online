import React from "react";

import pic from "../../assets/about_pic.jpg";

const About = () =>{
    return (
        
<div className="w-4/5 items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-16 mx-auto justify-center items-center">    
<a href="#" class="flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <div class="flex flex-col p-4 m-4 md:m-12 leading-normal">
        <h5 class="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text2xl lg:text-5xl dark:text-white leading-snug">Who we are ?</h5>
        <p class="py-3 justify-center text-gray-600 text-lg text-xs lg:text-xl">we are providing online education. Our online education systems is designed to facilitate remote learning and provide educational 
        resources and opportunities through the internet. Our aim to replicate or enhance traditional classroom environments by offering various features and tools that support teaching, 
        learning, and communication between instructors and students.</p>
    </div>
    <img class="object-cover w-full rounded-lg h-auto md:h-auto md:w-1/2 md:rounded-lg" src={pic} alt="" />
</a>
</div>

    )
}
export default About;