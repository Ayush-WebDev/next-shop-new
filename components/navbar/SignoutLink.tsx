"use client";
import React from "react";
import { toast } from "sonner";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
const SignoutLink = () => {
  const handleLogout = () => {
    toast("Logout Successful");
  };
  return (
    <SignOutButton>
      <Link onClick={handleLogout} href={"/"}>
        Logout
      </Link>
    </SignOutButton>
  );
};

export default SignoutLink;
