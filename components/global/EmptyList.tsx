import { cn } from "@/lib/utils";

const EmptyList = ({
  text = "No items found!",
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <>
      <h2 className={cn("text-xl", className)}>{text}</h2>
    </>
  );
};
export default EmptyList;
