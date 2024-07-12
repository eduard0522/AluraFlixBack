import Video from "../models/video.js";

export const getAllVideos = async (req,res) => {
  try {
    const videos = await Video.find();
    return res.json(videos)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message : "An unexpected error ocurred."})
  }
}


export const createVideo = async (req,res) => {
  console.log(req.body)
  try {
    const newVideo = new Video(req.body);
    const savedVideo = await newVideo.save();
    if(savedVideo) res.json({ newVideo })
  } catch (error) {
     return res.status(400).json({ message :[ error.errors ]})
  }  
}

export const updateVideo = async (req,res) => {
  const { id } = req.params;
  try {
    const video = await Video.findByIdAndUpdate( id , req.body , { new : true});

    if(!video) return res.status(404).json({ message : " Video not found "});

    return res.json(video)

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message : "An unexpected error ocurred."})
  }
}


export const deleteVideo = async ( req,res) => {
  const { id } = req.params;
    try {
      const video = await Video.findByIdAndDelete(id);
       if(!video) return res.status(404).json({message : "Video not found."});
    
       return res.json({message : "Video deleted."});
       
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message : " An unexpected error ocurred."})
    }
} 