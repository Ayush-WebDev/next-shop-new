import React from "react";
import { currentUser, auth } from "@clerk/nextjs/server";
import { LucideUser2 } from "lucide-react";
// Since the user is fetched from the clerk we use the async function and await the values
// if we need the userId we can use the auth function and it is a synchronous function
const UserIcon = async () => {
  const { userId } = await auth();
  const user = await currentUser();
  const profileImg = user?.imageUrl;
  if (user?.imageUrl)
    return (
      <img src={profileImg} className="w-6 h-6 rounded-full object-cover" />
    );
  return (
    <LucideUser2 className="min-h-6 p-1 min-w-6 rounded-full flex-none object-cover bg-primary text-white" />
  );
};

export default UserIcon;
