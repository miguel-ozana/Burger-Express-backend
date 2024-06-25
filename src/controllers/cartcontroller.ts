import { Request, Response } from "express";
import { addItemToCart, removeFromCart, getItemsCart } from "../services/cartservice";

export async function getCart(req: Request, res: Response) {
  try {
    const cart = await getItemsCart(req.params.userId);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function addToCart(req: Request, res: Response) {
  try {
    const cart = await addItemToCart(
      req.params.userId,
      req.params.productId,
      parseInt(req.params.quantity, 10)
    );
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function removeItemFromCart(req: Request, res: Response) {
  try {
    const cart = await removeFromCart(
      req.params.userId,
      req.params.productId
    );
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json(error)
  }
}