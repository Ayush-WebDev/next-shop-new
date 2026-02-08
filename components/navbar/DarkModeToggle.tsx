"use client";

import React from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";

const DarkModeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"} size={"icon"}>
            <SunIcon
              className={
                "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              }
            />
            <MoonIcon
              className={
                "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              }
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="px-6 dark:bg-accent py-4 flex flex-col border mt-1  gap-2 bg-white shadow-md rounded-lg"
        >
          <DropdownMenuItem
            className="hover:border-0 cursor-pointer hover:outline-0"
            onClick={() => {
              setTheme("light");
            }}
          >
            Light
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:border-0 cursor-pointer hover:outline-0"
            onClick={() => {
              setTheme("dark");
            }}
          >
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:border-0 cursor-pointer hover:outline-0"
            onClick={() => {
              setTheme("system");
            }}
          >
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default DarkModeToggle;
