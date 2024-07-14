import express from 'express'
import cors from "cors"
import morgan from 'morgan';
import routerVideos from './src/router/videos.routes.js';
import routerGroup from './src/router/groups.routes.js';
import { connectionDB } from './src/db/index.js';
import { config } from "dotenv";

config()

const port = process.env.PORT || 3000
console.log(port)
const app =  express();

app.use(morgan());
app.use(express.json());
app.use(cors());




app.use("/",routerVideos);
app.use("/groups", routerGroup)
 
connectionDB()

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

export default app



