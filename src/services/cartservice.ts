import { prisma } from "../lib/prisma.lib";

export async function getItemsCart(userId: string) {
  const cart = await prisma.cart.findFirst({
    where: { userId },
    include: { items: { include: { product: true } } },
  });
  return cart;
}

export async function addItemToCart(
  userId: string,
  productId: string,
  quantity: number
) {
  let cart = await prisma.cart.findFirst({
    where: { userId },
  });

  if (!cart) {
    cart = await prisma.cart.create({
      data: { userId },
    });
  }

  const cartItem = await prisma.cartItem.findFirst({
    where: { cartId: cart.id, productId },
  });

  if (cartItem) {
    await prisma.cartItem.update({
      where: { id: cartItem.id },
      data: { quantity: cartItem.quantity + quantity },
    });
  } else {
    await prisma.cartItem.create({
      data: { cartId: cart.id, productId, quantity },
    });
  }

  const updateCart = await prisma.cart.findFirst({
    where: { id: cart.id },
    include: { items: { include: { product: true } } },
  });
}

export async function removeFromCart(userId: string, productId: string) {
  const cart = await prisma.cart.findFirst({
    where: { userId },
  });

  if (cart) {
    await prisma.cartItem.deleteMany({
      where: {
        cartId: cart.id,
        productId: productId,
      },
    });
  } else {
    throw new Error("Cart not found");
  }

  const updatedCart = await prisma.cart.findFirst({
    where: { id: cart.id },
    include: { items: { include: { product: true } } },
  });

  return updatedCart;
}


