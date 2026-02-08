import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const AddToCart = ({
  productId,
  className,
}: {
  productId: string;
  className?: string;
}) => {
  return (
    <Button
      variant={"default"}
      size={"lg"}
      className={cn("capitalize", className)}
    >
      Add to cart
    </Button>
  );
};

export default AddToCart;
