import express from 'express'
import cors from "cors"
import morgan from 'morgan';
import routerVideos from './router/videos.routes.js';
import routerGroup from './router/groups.routes.js';
import { connectionDB } from './db/index.js';
import { config } from "dotenv";

config()

const app =  express();
const port = process.env.PORT || 9876

app.use(morgan("combined"));
app.use(express.json());
app.use(cors({
  credentials: true,
} ));

app.use("/groups", routerGroup)
app.use(routerVideos);

connectionDB()

app.listen(port , () => {
  console.log("Server is running on port ", port);
});

export default app



