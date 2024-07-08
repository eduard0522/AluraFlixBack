import mongoose from "mongoose";

const videoSchema =  new mongoose.Schema({
  title:{
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
  imageUrl: {
    type:String,
    required: true
  }

});

export default mongoose.model( "Video" , videoSchema);