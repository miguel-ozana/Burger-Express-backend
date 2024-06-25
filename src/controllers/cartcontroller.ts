import { Request, Response } from "express";
import { addItemToCart, removeFromCart, getItemsCart } from "../services/cartservice";

export async function getCart(req: Request, res: Response) {
  try {
    const { userId } = req.params;
    const cart = await getItemsCart(userId);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function addToCart(req: Request, res: Response) {
  try {
    const { userId, productId, quantity } = req.body;
    await addItemToCart(userId, productId, quantity);
    res.status(200).json({ message: 'Produto adicionado ao carrinho com sucesso!' });
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function removeItemFromCart(req: Request, res: Response) {
  try {
    const { userId, productId } = req.params;
    const cart = await removeFromCart(userId, productId);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json(error);
  }
}