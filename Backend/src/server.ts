import dotenv from "dotenv";
import express, { Express } from "express";
import router from "./routes";

dotenv.config();

const port = process.env.PORT || 8080;
const app: Express = express();

app.use(router);

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});
