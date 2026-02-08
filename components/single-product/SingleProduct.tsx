import React from "react";
import Section from "../global/Section";
import Image from "next/image";
import { Products } from "@/lib/generated/prisma/client";
import { Card, CardContent } from "../ui/card";
import BreadCrumbsProduct from "./BreadCrumbsProduct";
import FavouriteToggle from "../products/FavouriteToggle";
import { Button } from "../ui/button";
import { formatprice } from "@/utils/formatPrice";
import AddToCart from "./AddToCart";

const SingleProduct = ({ product }: { product: Products }) => {
  const { name, company, featured, id, description, image, price } = product;
  return (
    <>
      {/* Product Page structure */}
      <Section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className=" col-span-2">
          <BreadCrumbsProduct name={name} />
        </div>
        <Card className=" py-2">
          <CardContent className="px-2">
            <div className="relative h-125 w-full">
              {/* Product images */}
              <Image
                alt={name}
                src={image}
                fill
                className="w-full rounded-xl h-full object-cover"
                sizes={"(max-width:768px)100vw,(max-width:1200) 50vw, 33vw"}
              />
            </div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 align-top content-start gap-8 ">
          {/* Product details */}
          <div className="flex flex-row justify-start items-center gap-8">
            <h1 className="text-2xl font-bold tracking-wider leading-relaxed capitalize sm:text-3xl md:text-4xl lg:text-5xl">
              {name}
            </h1>
            <FavouriteToggle />
          </div>
          <div>
            <h3 className="capitalize font-normal text-xl">{company}</h3>
          </div>
          <div>
            <Button
              variant={"outline"}
              className="bg-muted border-none shadow-none rounded-xs"
            >
              {formatprice(Number(price))}
            </Button>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed text-justify">
            {description}
          </p>
          <AddToCart
            productId={id}
            className=" inline-flex max-w-fit text-lg"
          />
        </div>
      </Section>
    </>
  );
};

export default SingleProduct;
