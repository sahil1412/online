import React from 'react';
import loginApiCollections from "../../api_services/loginPage/login.api";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
let baseurl = 'http://localhost:5000/api/v1/userLogin/login';

const Login = () =>{
    const history = useHistory();
    const [form,setForm] = useState([]);
    const [username,setUsername] = useState([]);
    const [password,setPassword] = useState([]);
    const data = {
      username : username,
      password : password
    }
    const handleForm = (e) =>{
      setForm({ ...form,
      [e.target.name] : e.target.value
      })
    }
    const handleSubmit = async (e) =>{
      /*e.preventDefault();
      const res = await fetch(baseurl,{
        method : 'GET'
      })
      const rslt = await res.text();
      console.log(rslt);
      */
      console.log(form);
      e.preventDefault();
      const res = await fetch(baseurl,{
        method : 'POST',
        body : JSON.stringify(form),
        headers : {
          'Content-Type' : 'application/json'
        }
      })

    }
    return (
        <div className="md:w-3/4 bg-gray-100 my-16 mx-20 md:mx-auto lg:w-2/5 p-4 flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-4/5">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                User Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input name="username" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" onChange={handleForm}/>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input name="password" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" onChange={handleForm} placeholder="******************" />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3"></div>
            <label className="md:w-2/3 block text-gray-500 font-bold">
              <input className="mr-2 leading-tight" type="checkbox" />
              <span className="text-sm">
                google Captcha
              </span>
            </label>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-2/3">
              <button className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300 transform hover:-translate-y-1" type="submit">
                Sign in
              </button>
            </div>
          </div>
        </form>
        </div>
    )
}

export default Login