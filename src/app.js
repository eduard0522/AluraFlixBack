import express from 'express'
import cors from "cors"
import morgan from 'morgan';
import routerVideos from './router/videos.routes.js';

const app =  express();

app.use(morgan("combined"));
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,

} ));


app.use(routerVideos);

export default app