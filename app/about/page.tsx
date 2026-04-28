import Section from "@/components/global/Section";
import SectionTitle from "@/components/global/SectionTitle";
import React from "react";

const page = () => {
  return (
    <Section>
      <div className="max-w-full p-8 gap-4 grid items-center md:max-w-200 mx-auto">
        <h1 className="text-5xl text-center">
          About{" "}
          <span className="text-background bg-primary px-2 rounded-lg">Us</span>
        </h1>
        <p className="text-xl text-center pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A nisi,
          reprehenderit quisquam itaque quae reiciendis dicta earum facere,
          exercitationem deserunt consequatur consectetur. Iste, dolor ipsum!
          Quidem magni deleniti debitis laborum!
        </p>
      </div>
    </Section>
  );
};

export default page;
