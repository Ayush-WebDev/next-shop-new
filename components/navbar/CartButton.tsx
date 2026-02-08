import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const CartButton = () => {
  const numCart: number = 9;
  return (
    <div>
      <Button
        size={"icon"}
        variant={"secondary"}
        className="flex flex-row relative justify-center items-center"
        asChild
      >
        <Link href={"/"}>
          <ShoppingCart className="h-8 w-8" />
          <span className="text-xs text-secondary p-0.5 h-4 w-4 absolute -top-1 -right-1 rounded-full flex flex-col items-center justify-center bg-primary">
            {numCart}
          </span>
        </Link>
      </Button>
    </div>
  );
};

export default CartButton;
