import mongoose from "mongoose";

const groupModel = new mongoose.Schema({
  name : {
    type : String,
    required: true
  },
  color : {
    type :String,
    required: true
  }
});

export default mongoose.model( "Group" , groupModel);