const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
require("dotenv").config();
const app = require(`./src/app`);
const connectDB = require("./src/batabase/database");

connectDB()
app.listen(3000,()=>{
    console.log(`server runnin on port 3000`)
})


