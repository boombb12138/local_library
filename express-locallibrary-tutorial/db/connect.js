const mongoose = require("mongoose");
mongoose.set("strictQuery",false);
const mongoDB = "mongodb+srv://boombb12138:lbLejPDdnorLGsYc@cluster0.8x33y15.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main().catch((err) => console.log(err));
async function main(){
    await mongoose.connect(mongoDB)
}