import "reflect-metadata"
import express from "express";
import cors from "cors"
import path from 'path'
import morgan from 'morgan'

const app = express();
import './database'
app.use(express.json());

import { router } from "./routes";

app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev "));
app.use(
  '/files',
  express.static(path.resolve(__dirname,"..", "tmp", "uploads"))
);
app.use(router)
app.listen(3333,()=>{
    console.log("server is runing");
});

