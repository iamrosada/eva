import "reflect-metadata"
import express from "express";
import cors from "cors"

const app = express();
import './database'
app.use(express.json());

import { router } from "./routes";

app.use(cors())
app.use(router)


app.listen(3333,()=>{
    console.log("server is runing");
});