import mongoose from "mongoose";

const videoSchema =  new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  description:{ 
    type: String,
    required:true,
  },
  videoUrl:{
    type:String,
  },
  image: {
    type:String,
    required: true
  },
  group:{
    type: String,
    required:  true
  }

});

export default mongoose.model( "Video" , videoSchema);