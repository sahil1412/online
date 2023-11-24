import React from 'react';
import pic1 from "../../assets/home_page_pic_1.jpg"
import {useHistory} from "react-router-dom";
// import api from "../../apiservices/homePage";
import { ToastContainer,toast,Slide } from 'react-toastify';

const HomePage = () =>{
    
    return (
    <div className="bg-gray-100 m-2 md:m-8 lg:m-16 md:flex justify-center items-center" role="main">
      <div className="lg:w-4/5 px-16 py-8 justify-center items-center">
        <h1
          className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text2xl lg:text-5xl dark:text-white leading-snug"
          role="heading"
          aria-level="1"
        >
          Unlock Your Potential <br />
          <span className="text-green-700" role="heading" aria-level="1"
            >Empower Yourself with Our Online Education Platform</span
          >
        </h1>
        <p className="py-3 justify-center text-gray-600 text-xs lg:text-xl" aria-level="2">
        Empower yourself with knowledge, explore new horizons, and achieve your educational goals with our comprehensive online learning platform. Whether you're a student, professional, or lifelong learner, we have the tools, resources, and courses to help you succeed.
        </p>
        <div className="mt-8 justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4" aria-level="3" role="button">
          <a
            className="sm:w-auto inline-flex items-center justify-center md:flex px-8 py-3 text-xs lg:text-xl font-medium rounded-md text-white bg-green-700 shadow uppercase hover:bg-green-800 hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:bg-green-800 focus:shadow-lg active:bg-green-900"
            href="/courses"
            >See the courses</a
          >
          <a
            className=" sm:w-auto inline-flex items-center justify-center md:flex px-8 py-3 text-xs lg:text-xl ml-4 font-medium rounded-md text-green-700 bg-white shadow uppercase hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2 focus:ring-green-600 ring-offset-2 outline-none focus:shadow-lg"
            href="#"
            >Learn more</a
          >
        </div>
      </div>
      <div className="md:mr-20 sm:w-auto inline-flex items-center justify-center m-2 md:m-0" role="img">
        <img
          className="object-cover object-center rounded-md hover:shadow-lg transform transition hover:-translate-y-2"
          src={pic1}
          alt="Image of plants"
        />
      </div>

    </div>
    )
}

export default HomePage