const { default: mongoose } = require("mongoose");

const student = new mongooseUser.Schema({
    fullName : {
        type : String
    },
    email : {
        unique: true,
        type : String
    },
    userName : {
        type : String
    },
    password : {
        type : String
    },
    timestamps : true
})
const students = mongooseUser.model('user',student)