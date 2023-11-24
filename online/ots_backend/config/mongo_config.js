require('dotenv').config();
const config = {
    url : `mongodb+srv://${process.env.username}:${process.env.password}@${process.env.cluster}.lvoyv2m.mongodb.net/?retryWrites=true&w=majority`

}
module.exports = config;