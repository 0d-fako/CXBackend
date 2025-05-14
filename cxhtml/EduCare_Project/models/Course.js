import mongoose from "mongoose"

const courseSchema = mongoose.Schema({
    courseCode : {type : String, required: true},
    courseTitle: {type: String, required: true},
    courseDescription: {type : String},
    instructor: { type: mongoose.Schema.Tyoes.ObjectId, ref : "User", required : true},
    

})