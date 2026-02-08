import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Hero1 from "@/public/images/hero-1.jpg";
import Hero2 from "@/public/images/hero-2.jpg";
import Hero3 from "@/public/images/hero-3.jpg";
import Hero4 from "@/public/images/hero-4.jpg";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

const HeroCarousel = () => {
  const images = [Hero1, Hero2, Hero3, Hero4];
  return (
    <>
      <Card className="p-2 w-[80%] mx-auto">
        <CardContent className="p-2">
          <Carousel>
            <CarouselContent>
              {images.map((image, index) => {
                return (
                  <CarouselItem key={index}>
                    <div className="relative h-80 w-full">
                      <Image
                        className="rounded-xl"
                        alt="images"
                        src={image}
                        sizes="(max-width:1200px) 50vw, 33vw, (max-width:768px) 100vw"
                        fill
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="-ml-4" />
            <CarouselNext className="-mr-4" />
          </Carousel>
        </CardContent>
      </Card>
    </>
  );
};

export default HeroCarousel;
