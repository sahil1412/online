// import React ,{ useEffect,useCallback,useState } from "react";
// import { useSocket } from "../../../context/socketProvider";
// import ReactPlayer from 'react-player';

// const RoomPage = () =>{
//     const socket = useSocket();
//     const [remoteSocketId,setRemoteSocketId] = useState(null);
//     const [myStream,setMyStream] = useState();


//     const handleUserJoined = useCallback(({email,id}) =>{
//         console.log(`Email ${email} joined room`);
//         setRemoteSocketId(id);
//     },[]);

//     const handleCallUser = useCallback(async ()=>{
//         const stream = await navigator.mediaDevices.getUserMedia({
//             audio : true,
//             video : true,
//         });
//         setMyStream(stream);
//     },[]);

//     useEffect(() => {
//         socket.on('user : joined',handleUserJoined);
        
//         return () =>{
//             socket.off('user : joined',handleUserJoined)
//         }
//     },[socket , handleUserJoined]);
    
//     return (
//         <div>
//             <h1>Room page</h1>
//             <h4>{remoteSocketId ? "connected" : "no one in the room"}</h4>
//             {
//                 remoteSocketId && <button onClick={handleCallUser}> call </button>
//             }
//             {
//                 myStream && <ReactPlayer url={myStream} />
//             }
//         </div>
//     )
// }

// export default RoomPage;