"use client";
import { toast } from "sonner";

const page = () => {
  return (
    <div>
      <button
        onClick={() => {
          toast("clicked");
        }}
      >
        click me
      </button>
    </div>
  );
};

export default page;
