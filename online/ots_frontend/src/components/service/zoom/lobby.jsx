// import React,{useState , useCallback , useEffect} from "react";
// import { useSocket } from "../../../context/socketProvider";
// import { useHistory} from "react-router-dom";

// const LobbyScreen = () =>{
//     const [email,setEmail] = useState("");
//     const [room,setRoom] = useState("");
    
//     const socket = useSocket();
//     const history = useHistory();

//     const handleForm = useCallback((e)=>{
//         e.preventDefault();
//         socket.emit('room : join',{email,room});
//     },[email,room,socket])

//     const handleJoinRoom = useCallback((data)=>{
//       const {email,room} = data;
//       history.push(`room/${room}`);
//     },[]);

//     useEffect(() =>{
//       socket.on('room : join',handleJoinRoom);
//       return () => {
//         socket.off("room : join",handleJoinRoom);
//       }
//     },[socket,handleJoinRoom])

//     return (
//         <div className="md:w-3/4 bg-gray-100 my-16 mx-20 md:mx-auto lg:w-2/5 p-4 flex justify-center items-center">
//         <form className="w-4/5" onSubmit={handleForm}>
//           <div className="md:flex md:items-center mb-6">
//             <div className="md:w-1/3">
//               <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="email" >
//                 E mail
//               </label>
//             </div>
//             <div className="md:w-2/3">
//               <input name="username" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="text" Value={email} onChange={(e)=>setEmail(e.target.value)}/>
//             </div>
//           </div>
//           <div className="md:flex md:items-center mb-6">
//             <div className="md:w-1/3">
//               <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="room">
//                 Room
//               </label>
//             </div>
//             <div className="md:w-2/3">
//               <input name="password" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="room" type="text" Value={room} onChange={(e)=>setRoom(e.target.value)}  />
//             </div>
//           </div>
//           {/* <div className="md:flex md:items-center mb-6">
//             <div className="md:w-1/3"></div>
//             <label className="md:w-2/3 block text-gray-500 font-bold">
//               <input className="mr-2 leading-tight" type="checkbox" />
//               <span className="text-sm">
//                 google Captcha
//               </span>
//             </label>
//           </div> */}
//           <div className="md:flex md:items-center">
//             <div className="md:w-2/3">
//               <button className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300 transform hover:-translate-y-1" type="submit">
//                 Sign in
//               </button>
//             </div>
//           </div>
//         </form>
//         </div>  
//     )
// }

// export default LobbyScreen;