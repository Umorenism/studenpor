import express, { Application } from "express";
import cors from "cors";
import "./utils/dbConfig";
import { mainApp } from "./mainApp";

const port: number = 5000;
const app: Application = express();

app.use(cors());
app.use(express.json());

mainApp(app);
const server = app.listen(port, () => {
  console.log();
  console.log("connected...");
});

process.on("uncaughtException", (err: Error) => {
  console.log("uncaughtException: ", err);

  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection: ", reason);

  server.close(() => {
    process.exit(1);
  });
});
