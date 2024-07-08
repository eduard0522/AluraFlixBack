import {Schema, z} from "zod";

const createVideoSchema = z.object({
  title : {
    type : z.string(),
    required_error : " Title in required.",
    message : " Title must be a string."
  },
  description : { 
    type : z.string(),
    required_error : " Description is required.",
    message : " Description must be a string."
  },
  videoUrl : {
    type : z.string(),
    required_error : "Video URL is required.",
  },
  photoUrl : {
    type : z.string(),
    required_error : "Photo URL is required."
  }
});



const updateVideoSchema = z.object({
  title : {
    type : z.string(),
  },
  description : { 
    type : z.string(),
    message : " Description must be a string."
  },
  videoUrl : {
    type : z.string(),
  },
  photoUrl : {
    type : z.string(),
  }
});




export {
  createVideoSchema,
  updateVideoSchema
} 