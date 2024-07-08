import mongoose from "mongoose";


export const connectionDB =  async () => {
  try {
    await mongoose.connect("mongodb://localhost/videosFlix");
    console.log("Connect to database");
  } catch (error) {
    console.log(error);
  }
}

