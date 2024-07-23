const mongoose = require('mongoose');
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main()
   .then(()=>{               //calling main function
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
}); 
async function main(){   //connecting to DB
    await mongoose.connect(MONGO_URL);
 }
const initDB=async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data).then(res => console.log(res)).catch(err => console.log(err))
    console.log("data was initialized");
 };
initDB();