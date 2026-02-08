import { fetchFeaturedProducts } from "@/utils/actions";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

const FeaturedList = async () => {
  const productsFeatured = await fetchFeaturedProducts();
  if (productsFeatured.length === 0) <EmptyList text="No items found" />;

  return (
    <section className="pt-28">
      <SectionTitle text="Featured products" />
      <div>
        <ProductsGrid products={productsFeatured} />
      </div>
    </section>
  );
};

export default FeaturedList;
