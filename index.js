import express from 'express'
import cors from "cors"
import morgan from 'morgan';
import routerVideos from './src/router/videos.routes.js';
import routerGroup from './src/router/groups.routes.js';
import { connectionDB } from './src/db/index.js'

import dotenv from 'dotenv';
dotenv.config();

const app =  express();

app.use(morgan("combined"));
app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
  res.send("Hello World");
})
app.use("/groups", routerGroup)
app.use("/api",routerVideos);

 
connectionDB()

app.listen(5500,  () => {
  console.log("Server is running on port 3000")
});

export default app
