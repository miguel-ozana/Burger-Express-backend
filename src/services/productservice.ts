import { prisma } from "../lib/prisma.lib";

interface ProductsData {
  id: string;
  name: string;
  price: number;
  description: string;
  rating: number;
}

export async function getProducts(): Promise<ProductsData[]> {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      description: true,
      rating: true,
    },
  });
  return products;
}

export async function getProductsById(id: string): Promise<ProductsData[]> {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      description: true,
      rating: true,
    },
    where: {
      id: id,
    },
  });
  return products;
}

export async function getProductsByName(name: string): Promise<ProductsData[]> {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      description: true,
      rating: true,
    },
    where: {
      name: name,
    },
  });
  return products;
}

export async function createProduct(data: ProductsData): Promise<ProductsData> {
  const product = await prisma.product.create({
    data: data,
  });
  return product;
}
