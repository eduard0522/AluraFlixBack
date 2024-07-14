import mongoose from "mongoose";


export const connectionDB =  async () => {
  try {
    await mongoose.connect("mongodb+srv://eduard:eduard0307@cluster0.8grrfkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connect to database");
  } catch (error) {
    console.log(error);
  }
}

