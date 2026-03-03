import LoadingContainer from "@/components/global/LoadingContainer";
import ProductsContainer from "@/components/products/ProductsContainer";
import React, { Suspense } from "react";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; layout?: string }>;
}) => {
  const { search, layout } = await searchParams;

  return (
    <Suspense fallback={<LoadingContainer />}>
      <ProductsContainer search={search || ""} layout={layout || "grid"} />
    </Suspense>
  );
};

export default page;
