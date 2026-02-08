import SingleProduct from "@/components/single-product/SingleProduct";
import { fetchSingleProduct } from "@/utils/actions";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await fetchSingleProduct({ productId: id });
  return (
    <div>
      <SingleProduct product={product} />
    </div>
  );
};

export default page;
