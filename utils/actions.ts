// We need to setup the logic to communicate with database so actions file contain all that logic

import { redirect } from "next/navigation";
import db from "./db";

// We can have selected properties returned using select({name:"fdsf"})

export const fetchFeaturedProducts = async () => {
  const products = await db.products.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
  const products = await db.products.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
  });

  return products;
};

export const fetchSingleProduct = async ({
  productId,
}: {
  productId: string;
}) => {
  const product = await db.products.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) redirect("/products");
  return product;
};
