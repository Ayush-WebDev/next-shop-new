import { cn } from "@/lib/utils";

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <section className={cn("py-16  ", className)}>{children}</section>;
};

export default Section;
