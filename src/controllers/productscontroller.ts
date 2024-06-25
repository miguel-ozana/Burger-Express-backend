import { Response, Request } from "express";
import {
  getProducts,
  getProductsById,
  getProductsByName,
  createProduct,
} from "../services/productservice";

export async function getAllProducts(req: Request, res: Response) {
  try {
    const products = await getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function getProductById(req: Request, res: Response) {
  try {
    const products = await getProductsById(req.params.id);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function getProductByName(req: Request, res: Response) {
  try {
    const products = await getProductsByName(req.params.name);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function postProduct(req: Request, res: Response) {
  try {
    const product = await createProduct(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json(error);
  }
}
