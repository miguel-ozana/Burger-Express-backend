import { Router } from "express";
import { addToCart, getCart, removeItemFromCart } from "../controllers/cartcontroller";
const router = Router();

router.get("/", getCart);
router.post("/add", addToCart);
router.delete("/:id", removeItemFromCart);

export default router;