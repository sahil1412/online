import React from 'react';
import { useState } from 'react';
// import api from "../../apiservices/homePage";
import { ToastContainer,toast,Slide } from 'react-toastify';
import registerApiCollections from "../../api_services/registerPage/register.api";
import dummy_image from "../../assets/dummy_image.png";

const countries = [
  {
      name : 'India',
      value:'IN',
      states:[
        'Delhi',
        'Haryana',
        'Punjab',
        'Rajasthan',
        'Himachal Pradesh',
        'Uttar Pradesh']
  },
    {
      name : 'USA',
      value : 'US',
      states : [
        'Texas',
        'California',
        'Florido',
        'Georgia',
        'Washington'
      ]
    },
    {
      name : 'England',
      value : 'ENG',
      states : [
        'London',
        'East Midlands',
        'West Midlands',

      ]
    }
]

const Student_Register = () =>{
    const [form,setForm] = useState([]);
    const [source,setSource] = useState(dummy_image);
    const [country,setCountry] = useState({name :"",value:"",states:[]});
    const [state_,setState_] = useState([]);

    const handleCountry = (e) =>{
      //console.log(countries[e.target.value]);
      setCountry(countries[e.target.value]);
    }
    const handleStates = (e) =>{
      console.log(e.target.value);
      setState_(e.target.value);
    }

    const handleFile = (e) => {
      const file = e.target.files[0];
      preview_pic(file);
    }
    const preview_pic = (file) =>{
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () =>{
        setSource(reader.result);
      }
    }
    const handleImage = (e) =>{
      e.preventDefault();
      if(!source) return;
      uploadImage(source);
    }
    const uploadImage = (base64EncodedImage) =>{
      console.log(base64EncodedImage);
    }
    const handleForm = (e) =>{
      if(e.target.name == "image"){
        const file = e.target.files[0];
        preview_pic(file);
      }
      setForm({ ...form,
        [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async (e) =>{
      e.preventDefault();
      console.log(form);
      registerApiCollections.insertUserDetails(form)
      .then((data) => {
        if(data.data.success){
          toast.success(data.data.message);
        }
        else{
          toast.error(data.data.message);
        }
      })
    }
    return (
        <div className="md:w-3/4 bg-gray-100 my-16 mx-20 md:mx-auto lg:w-2/5 p-4 flex justify-center items-center">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
  <div className="flex flex-wrap -mx-3 mb-6">
  <div className="w-full px-3">
    <form onSubmit={handleImage}>
      <img class="rounded-full w-30 h-30 md:w-60 md:h-60 p-3 m-auto" src={source} alt="image description" />

      <input name="image" onChange={handleForm} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-image" type='file' placeholder="upload image" />
      <button className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300 transform hover:-translate-y-1" type="submit">
                Upload
              </button>
      </form>
    </div>
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-firstname">
        First Name
      </label>
      <input name="first_name" onChange={handleForm} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-firstname" type="text" />
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-lastname">
        Last Name
      </label>
      <input name="last_name" onChange={handleForm} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-lastname" type="text" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-username">
        Username
      </label>
      <input name="user_name" onChange={handleForm} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-username" type="text" />
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input name="password" onChange={handleForm} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-course">
        Course
      </label>
      <input name="course" onChange={handleForm} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-course" type="text" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-fathername">
        Father Name
      </label>
      <input name="father_name" onChange={handleForm} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-fathername" type="text" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-c-address">
        Permanent Address
      </label>
      <input name="parmanent_address" onChange={handleForm} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-c-address" type="text" placeholder="Address" />
    </div>
    </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-p-district">
        City
      </label>
      <input name="parmanent_district" onChange={handleForm} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-p-district" type="text" placeholder="district" />
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-p-state">
        State
      </label>
      <input name="parmanent_state" onChange={handleForm} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-p-state" type="text" placeholder="district" />
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-p-pincode">
        Zip
      </label>
      <input name="parmanent_pincode" onChange={handleForm} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-p-pincode" type="text" placeholder="90210" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-c-address">
        Current Address
      </label>
      <input name="current_address" onChange={handleForm} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-c-address" type="text" placeholder="Address line " />
    </div>
    </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-c-district">
        City
      </label>
      <input name="current_district" onChange={handleForm} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-c-district" type="text" placeholder="district" />
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-c-state">
        State
      </label>
      <input name="current_state" onChange={handleForm} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-c-state" type="text" placeholder="district" />
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-c-pincode">
        Zip
      </label>
      <input name="current_pincode" onChange={handleForm} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-c-pincode" type="text" placeholder="90210" />
    </div>
  </div>
  <div className="md:flex md:items-center">
            <div className="md:w-2/3">
              <button className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300 transform hover:-translate-y-1" type="submit">
                Register
              </button>
            </div>
          </div>
{/* Dropdown menu 

<select onChange={handleCountry}>
{countries.map((item,index)=>{
  return (
    <option value={index}>{item.name}</option>
  )
})}
</select>
<select value={country}>
{
  country.states.map((item,index)=>{
    return (<option value={index}>{item}</option>)
  })
}
</select>*/}
</form>
        </div>
    )
}

export default Student_Register