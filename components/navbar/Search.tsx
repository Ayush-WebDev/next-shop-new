"use client";

// In case of client side component, we use - useSearchParams to get the searchparams but in server component we use to pass the Promise<{id:string}>
// with the await and async function
import { Input } from "../ui/input";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [searchval, setSearch] = useState(
    searchParams.get("search")?.toString() || "",
  );

  const debounceFunc = <T extends (...args: any[]) => any>(
    cb: any,
    delay: number,
  ) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
      timeout = setTimeout(() => {
        clearTimeout(timeout);
        cb(...args);
      }, delay);
    };
  };
  const func = (val: string) => {
    const params = new URLSearchParams(searchParams);
    if (val) {
      params.set("search", val);
    } else {
      params.delete("search");
    }
    replace(`/products?${params.toString()}`);
  };
  const debounceSearchFunc = debounceFunc(func, 1000);
  useEffect(() => {
    if (!searchParams.get("search")) {
      setSearch("");
    }
  }, [searchParams.get("search")]);

  return (
    <Input
      type="search"
      name="search"
      placeholder="Search Products.."
      className="max-w-xs dark:bg-muted w-full"
      value={searchval}
      onChange={(e) => {
        const val = e.target.value;
        setSearch(val);
        debounceSearchFunc(val);
      }}
    ></Input>
  );
};

export default Search;
