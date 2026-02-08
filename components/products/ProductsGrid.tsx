import { Products } from "../../lib/generated/prisma/client";
import Section from "../global/Section";
import { Button } from "../ui/button";
import Link from "next/link";
import { formatprice } from "@/utils/formatPrice";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import FavouriteToggle from "./FavouriteToggle";

const ProductsGrid = ({ products }: { products: Products[] }) => {
  return (
    <>
      <Section>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => {
            const { name, price, image, id, description } = product;
            const formattedPrice = formatprice(Number(price));
            return (
              <article key={index} className="group relative">
                <Link href={`/products/${id}`}>
                  <Card className="transform py-0 group-hover:shadow-xl transition-shadow duration-500">
                    <CardContent className="p-4">
                      <div className="relative rounded overflow-hidden h-64 w-full">
                        <Image
                          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw "
                          fill
                          src={image}
                          alt={name}
                          className="w-full rounded object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center">
                        <h3 className="mt-4 capitalize text-xl">{name}</h3>
                        <p className="mt-2 text-lg text-muted-foreground">
                          {formattedPrice}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
                <div className="absolute top-7 right-7 z-4">
                  <FavouriteToggle />
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
};

export default ProductsGrid;
