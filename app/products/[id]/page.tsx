import LoadingContainer from "@/components/global/LoadingContainer";
import SingleProduct from "@/components/single-product/SingleProduct";
import { fetchSingleProduct } from "@/utils/actions";
import { Suspense } from "react";
import { Loader2Icon } from "lucide-react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await fetchSingleProduct({ productId: id });
  return (
    <Suspense
      fallback={
        <div className="grid align-middle items-center">
          <Loader2Icon />
        </div>
      }
    >
      <SingleProduct product={product} />
    </Suspense>
  );
};

export default page;
