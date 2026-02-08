"use client";
import { Section } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const SingleProductLoading = () => {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <Card>
        <CardContent>
          <Skeleton className="w-full h-125" />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Skeleton className="w-1/2 h-20" />
          <Skeleton className="w-full h-40" />
          <Skeleton className="w-1/2 h-20" />
          <Skeleton className="w-1/4 h-10" />
        </CardContent>
      </Card>
    </Section>
  );
};

export default SingleProductLoading;
