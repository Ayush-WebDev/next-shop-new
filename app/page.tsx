import LoadingContainer from "@/components/global/LoadingContainer";
import Section from "@/components/global/Section";
import FeaturedList from "@/components/home/FeaturedList";
import Hero from "@/components/home/Hero";
import HeroCarousel from "@/components/home/HeroCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
///
const Home = () => {
  return (
    <div>
      <Section>
        <Hero />
      </Section>
      <Section>
        <Suspense fallback={<LoadingContainer />}>
          <FeaturedList />
        </Suspense>
      </Section>
    </div>
  );
};

export default Home;
