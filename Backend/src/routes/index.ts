import express, { Router } from "express";
import getProducts from "../controllers/getProducts";

const router: Router = express.Router();

router.get("/api/products", getProducts);

export default router;
