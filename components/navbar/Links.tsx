import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuGroup,
} from "@radix-ui/react-dropdown-menu";
import { AlignLeft } from "lucide-react";
import { Button } from "../ui/button";
import { links } from "@/utils/links";
import Link from "next/link";

const Links = () => {
  return (
    <div className="z-10">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"} size={"icon"}>
            <AlignLeft
              className={"h-[1.2rem] w-[1.2rem] scale-100 transition-all"}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={4}
          className="w-40 px-4 ark:bg-accent py-4 flex flex-col justify-items-stretch border  gap-2 bg-white dark:bg-accent shadow-md rounded-lg"
        >
          {links?.map((link, index) => {
            const { href, text } = link;
            return (
              <DropdownMenuItem
                key={index}
                className="capitalize text-foreground hover:border-0 cursor-pointer hover:outline-0"
              >
                <Link className="" href={href}>
                  {text}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuGroup>
            <DropdownMenuSeparator className="w-full h-px bg-gray-200" />
            <DropdownMenuItem className="capitalize hover:border-0 cursor-pointer hover:outline-0">
              <Link href={"/logout"}>{"Logout"}</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Links;
