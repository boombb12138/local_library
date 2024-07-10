const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
    a:String,
    b:Date
})

const SomeModel= mongoose.model("SomeModel",SomeModelSchema)