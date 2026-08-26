import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../utilities/features/searchSlice";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const Dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    Dispatch(setQuery(searchTerm));
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSearch(e);
        }}
        className="flex  bg-(--c1) gap-5 py-10 px-10"
      >
        <input
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          required
          className="w-full border-2 px-6 py-3 text-xl rounded outline-none"
          type="text"
          placeholder="Search anything..."
        />
        <button className="active:scale-95 cursor-pointer border-2 px-6 py-3 text-xl rounded outline-none">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
