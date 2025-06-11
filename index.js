import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import "dotenv/config";
import { libRouter } from "./routers/library.router.js";

const app = express();
const Port = process.env.Port || 6060;
const MongoUri = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use(libRouter);

mongoose.connect(MongoUri)
.then(() => {
    console.log("Database connected...")
})
.catch(() => {
    console.log("Database not connected")
})

app.listen(Port, () => {
    console.log(`Server listening on ${Port}`);
});

// NW5wGbMLdi4JpRk7