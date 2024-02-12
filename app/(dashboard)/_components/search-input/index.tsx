"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import qs from "query-string";
import { useDebounce, useDebounceValue } from "usehooks-ts";

import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

//search input to search organizations
export const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  //debounce the search value to delay for 400ms
  const debounceValue = useDebounceValue(value, 400);

  const [debounceSearchValue] = debounceValue;

  useEffect(() => {
    //constructing url based on query passed inside search box
    const URL = qs.stringifyUrl(
      { url: "/", query: { search: debounceSearchValue } },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(URL);
  }, [debounceValue, router]);

  const handleChange = () => {};

  return (
    <div className="w-full relative">
      <SearchIcon />
      <Input
        placeholder="Search organization"
        className="w-full max-w-[516px] pl-9"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};
