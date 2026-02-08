import Link from "next/link";
import { Button } from "../ui/button";
import { Code } from "lucide-react";

const Logo = () => {
  return (
    <div>
      <Button size={"icon"} asChild>
        <Link href="/">
          <Code className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
};

export default Logo;
