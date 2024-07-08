import { Router } from "express";
import { getAllVideos,createVideo } from "../controllers/video.controller.js";

const router = Router();

router.get("/", getAllVideos);
router.post("/", createVideo)

export default router