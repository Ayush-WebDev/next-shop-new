import {
  Breadcrumb as BreadProduct,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbItem,
  BreadcrumbPage,
} from "../ui/breadcrumb";

const BreadCrumbsProduct = ({ name }: { name: string }) => {
  return (
    <div>
      <BreadProduct>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="capitalize text-sm" href="/">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="capitalize text-sm" href="/products">
              Products
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink className="capitalize text-sm">
              {name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </BreadProduct>
    </div>
  );
};

export default BreadCrumbsProduct;
