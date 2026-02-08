import React from "react";
import { Skeleton } from "../ui/skeleton";
import { Card, CardContent } from "../ui/card";

const LoadingContainer = () => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );
};

const LoadingProduct = () => {
  return (
    <Card>
      <CardContent className="gap-4 flex flex-col">
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-4 w-1/4" />
      </CardContent>
    </Card>
  );
};

export default LoadingContainer;
