import express from "express";
import { router } from "./routes/route";

const server = express();

server
    .use(express.json())
    .use(router)

export { server };