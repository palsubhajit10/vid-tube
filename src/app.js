import express from "express";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//common middleware
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use(express.static("public"));

//import routes
import healthCkeckRouter from "./routes/healthcheck.route.js";

//routes
app.use("/api/v1/healthcheck", healthCkeckRouter);

export { app };
