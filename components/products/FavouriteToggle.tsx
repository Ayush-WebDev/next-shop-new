import { HeartIcon } from "lucide-react";
import React from "react";

const FavouriteToggle = () => {
  return (
    <div className="bg-white text-black flex flex-col justify-center items-center h-10 w-10 rounded border shadow-sm">
      <HeartIcon />
    </div>
  );
};

export default FavouriteToggle;
