import { cn } from "@/lib/utils";
import React from "react";
//cn is the helper function that if the value is undefined automatically omits the value
const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-7xl  xl:max-w-[105rem] px-4 sm:px-4 lg:px-8 xl:px-12",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
