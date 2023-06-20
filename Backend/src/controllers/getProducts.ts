import { Request, Response } from "express";
import { productService } from "../services/products";
import { Product } from "../models/product";

const getProducts = async (req: Request, res: Response) => {
  try {
    const response = await productService;

    const products = response.data;
    const markedUpProducts = products.map((product: Product) => {
      const markedUpPrice = product.unitPrice * 1.25;
      return { ...product, unitPrice: markedUpPrice };
    });

    res.json(markedUpProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getProducts;
