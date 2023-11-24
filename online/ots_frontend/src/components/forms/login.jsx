import React from 'react';
import loginApiCollections from "../../api_services/loginPage/login.api";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { redirect } from 'react-router';

const Login = () =>{
    const history = useHistory();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [login,setLogin] = useState(false);
    const [type,setType] = useState("");
    
    const refreshPage = () =>{
      window.location.reload(false);
    }

    const handleSubmit = async (e) =>{
      e.preventDefault();
      const form_data = {
        username : username,
        password : password
      }
      if(type === "Student"){
        loginApiCollections.loginStudent(form_data)
        .then((resp)=>{
          resp.json().then((result)=>{
            // console.log(result);
            localStorage.setItem('login',JSON.stringify({
              login : true,
              token : "Bearer " + result.accessToken
            }))
            // history.push('/profile');
            refreshPage();
            setLogin(true);
          })
        },[])
        // .then((result) => {
        //   if(result.data){
        //     history.push({
        //       pathname : "/profile",
        //       state : username
        //     });
        //     //toast.success(data.data.message);
        //   }
        //   else{
        //     toast.error(result.data.message);
        //   }
        // },[])
      }
      else{
        loginApiCollections.loginfaculty(form_data)
        .then((resp)=>{
          resp.json().then((result)=>{
            // console.log(result);
            localStorage.setItem('login',JSON.stringify({
              login : true,
              token : "Bearer " + result.accessToken
            }))
            history.push('/profile');
            setLogin(true);
          })
        },[])
      }
      
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
              <input name="username" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-user-name" type="text" onChange={(e)=>setUsername(e.target.value)}/>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input name="password" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" onChange={(e)=>setPassword(e.target.value)} />
            </div>
          </div>
          
<div class="md:flex md:items-center mb-6 ">
    <input id="bordered-radio-1" type="radio" onClick={(e) =>setType(e.target.value)} value="Student" name="bordered-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="bordered-radio-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Student</label>
    <input id="bordered-radio-2" type="radio" onClick={(e) =>setType(e.target.value)} value="Faculty" name="bordered-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label for="bordered-radio-2" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Faculty</label>

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