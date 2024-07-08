import Video from "../models/video.js";

import { createVideoSchema } from "../schemas/video.schema.js";

export const createVideo = async (req,res) => {

  const validateVideo =  createVideoSchema.parse(req.body);

  if (validateVideo) {
    return res.status(400).json({ error: "We" });
  }

  console.log(validateVideo)
  /* const newVideo = new Video({ validateVideo }) */

  return res.json(validateVideo)

/*   try {
    
  } catch (error) {
    
  } */

}


 export const getAllVideos = async (req,res) => {

  try {
    const videos = await videos.find();
    console.log(videos);
    return res.json(videos)
  } catch (error) {
    console.log(error)
  }
}