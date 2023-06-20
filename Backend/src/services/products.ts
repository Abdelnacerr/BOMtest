import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const productService = axios.get("http://alltheclouds.com.au/api/Products", {
  headers: {
    accept: "text/json",
    "api-key": process.env.API_KEY,
  },
});
