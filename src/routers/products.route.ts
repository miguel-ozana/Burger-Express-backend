import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  getProductByName,
  postProduct,
} from "../controllers/productscontroller";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.get("/name/:name", getProductByName);
router.post("/", postProduct);

export default router;