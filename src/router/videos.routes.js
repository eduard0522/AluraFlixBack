import { Router } from "express";

import { getAllVideos,createVideo,updateVideo, deleteVideo, getVideoById} from "../controllers/video.controller.js";

import validateSchema from "../middlewares/validateSchema.js";

import { createVideoSchema, updateVideoSchema } from "../schemas/video.schema.js";


const router = Router();

router.get("/", getAllVideos);

router.get("/:id", getVideoById);

router.post("/", validateSchema(createVideoSchema), createVideo);

router.put("/:id" , validateSchema(updateVideoSchema), updateVideo)

router.delete("/:id" , deleteVideo)


export default router