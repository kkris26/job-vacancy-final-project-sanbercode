import { useGlobal } from "../context/GlobalContext";


const SearchFilterForm = (type) => {
    const { searchQuery, setSearchQuery } = useGlobal();

  return (
    <div className="flex flex-col gap-2 rounded-full">
      <input
        type="text"
        placeholder="Search for job names..."
        className="input  font-light p-4 rounded-full text-neutral-800 focus:outline-none border border-neutral-200 w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchFilterForm;
