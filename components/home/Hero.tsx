import React from "react";
import Section from "../global/Section";
import HeroCarousel from "./HeroCarousel";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <Section className="grid grid-col-1 md:grid-cols-2 gap-16">
      <div className="flex flex-col justify-center items-start gap-8">
        <h1 className="text-5xl capitalize font-bold text-primary tracking-wider leading-tight">
          Shop in a modern store that cares for your tastes
        </h1>
        <p className="text-muted-foreground text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis a
          accusantium quisquam blanditiis expedita minima, soluta fugit
          voluptatum sed amet tenetur in, earum esse hic.
        </p>
        <Button variant={"default"} size={"lg"} asChild>
          <Link className="capitalize text-xl" href={"/products"}>
            Browse products
          </Link>
        </Button>
      </div>
      <div>
        <HeroCarousel />
      </div>
    </Section>
  );
};

export default Hero;
