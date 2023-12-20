// eslint-disable-next-line no-unused-vars
import React from "react";
import { Search } from "@icons";

const SearchBox = () => {
  return (
    <form className="w-1/3">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <Search />
        </div>
        <input
          type="search"
          className="w-full rounded-lg border border-base-dark-line bg-base-form-bg p-4 ps-10 text-sm text-text-gray"
          placeholder="Search..."
          required
        />
      </div>
    </form>
  );
};

export default SearchBox;
