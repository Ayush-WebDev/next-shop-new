import { GridIcon, ListIcon } from "lucide-react";
import Section from "../global/Section";
import SectionTitle from "../global/SectionTitle";
import { Button } from "../ui/button";
import { fetchAllProducts } from "@/utils/actions";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
const ProductsContainer = async ({
  search,
  layout = "grid",
}: {
  search: string;
  layout: string;
}) => {
  const products = await fetchAllProducts({ search });
  const searchTerm = search ? `&search=${search}` : "";
  return (
    <div>
      <Section className="flex flex-row justify-between gap-8 pb-4">
        <div>
          <h2 className="flex flex-row gap-1 justify-start items-center">
            <span>{products && products.length}</span>
            {products.length > 1 ? "Products" : "Product"}{" "}
          </h2>
        </div>
        <div className="flex flex-row gap-2 justify-start items-center">
          <Link href={`/products?layout=grid${searchTerm}`}>
            <GridIcon
              height={30}
              width={30}
              className={`${layout === "grid" ? "bg-primary p-1 rounded-sm text-white" : " bg-white p-1 rounded-sm text-black"}`}
            />
          </Link>
          <Link href={`/products?layout=list${searchTerm}`}>
            <ListIcon
              height={30}
              width={30}
              className={`${layout === "list" ? "bg-primary p-1 rounded-sm text-white" : " bg-white p-1 rounded-sm text-black"}`}
            />
          </Link>
        </div>
      </Section>
      <Separator />
      <Section>
        <div>
          {products.length === 0 ? (
            <h5>No products found!</h5>
          ) : layout === "grid" ? (
            <ProductsGrid products={products} />
          ) : (
            <ProductsList products={products} />
          )}
        </div>
      </Section>
    </div>
  );
};

export default ProductsContainer;
