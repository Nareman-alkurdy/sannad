import { useSearchParams } from "react-router-dom";

const categories = [
  "Women's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const SidebarCategories = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFilter = (category) => {
    searchParams.set("category", category);
    setSearchParams(searchParams);
  };

  return (
    <aside className="hidden lg:block w-64 bg-white border-r p-4">
      <h3 className="text-lg font-bold mb-4">Categories</h3>
      <ul className="space-y-3 font-poppins text-sm text-gray-700">
        {categories.map((cat, idx) => (
          <li
            key={idx}
            onClick={() => handleFilter(cat)}
            className="hover:text-black cursor-pointer"
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarCategories;
