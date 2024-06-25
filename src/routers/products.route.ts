import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  getProductByName,
  postProduct,
} from "../controllers/productscontroller";

const router = Router();

router.get("/", getAllProducts);
router.post("/", postProduct);
router.get("/:id", getProductById);
router.get("/:name", getProductByName);

export default router;