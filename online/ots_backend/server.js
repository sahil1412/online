require('dotenv').config();
// let { Server, Socket } = require("socket.io");
let express = require('express');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let session = require("express-session");

let app = express();
let cors = require('cors');
let router = express.Router();

let loginLineRoute = require('./routes/loginLine/loginLine.route');
let registerLineRoute = require('./routes/registerLine/registerLine.route');
let course_list = require('./routes/fetch_course/course.route');
let carrier_list = require('./routes/fetch_carrier/carrier.route');
let profile_details = require('./routes/fetch_profile/profile.route');


var allowCrossDomain=function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-type');
    next()
  }

let corsOptions = {
    origin : '*',
    credentials : true
}

app.use(router);
app.use(allowCrossDomain);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true}));
app.use(
    session({
        key : "userId",
        secret : "subscribe",
        resave : false,
        saveUninitialized : false,
        cookie : {
            expires : 60*60*24,
        },
    })

);
app.get('/',(req,res)=>{
    res.send("Welcome to ots")
})

app.use('/api/v1/userLogin',loginLineRoute);
app.use('/api/v1/registerations',registerLineRoute);
app.use('/api/v1/courses',course_list);
app.use('/api/v1/carrier',carrier_list);
app.use('/api/v1/profile',profile_details);

let port=process.env.Port || 4000;
app.listen(port);

// const io = new Server(8000,{
//     cors : true,
// })

// const emailToSocketIdMap = new Map();
// const socketIdToEmailMap = new Map();

// io.on("connection",(socket) =>{
//     //console.log('Socket Connected', socket.id);
//     socket.on("room : join",(data) =>{
//         const {email , room } = data
//         emailToSocketIdMap.set(email,socket.id);
//         socketIdToEmailMap.set(socket.id,email);
//         io.to(room).emit("user : joinded",{email,id: socket.id});
//         socket.join(room);
//         io.to(socket.id).emit("room : join",data);
//     })
// })
console.log("Server is Running at port : ",port);