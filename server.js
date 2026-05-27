const app = require(`./src/app`);
const connectDB = require("./src/batabase/database");

connectDB()
app.listen(3000,()=>{
    console.log(`server runnin on port 3000`)
})


