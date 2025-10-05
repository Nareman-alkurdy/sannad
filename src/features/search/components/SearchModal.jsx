import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && inputRef.current) inputRef.current.focus();
  }, [isOpen]);


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
      }
      if (e.key === "ArrowUp") {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }
      if (e.key === "Enter" && results[activeIndex]) {
        navigate(`/products/${results[activeIndex].id}`);
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [results, activeIndex, onClose, navigate]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      const fetchResults = async () => {
        setLoading(true);
        try {
          const res = await fetch("https://api.escuelajs.co/api/v1/products");
          const data = await res.json();
          const filtered = data.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
          );
          setResults(filtered.slice(0, 5));
        } catch (err) {
          console.error("Search error:", err);
        } finally {
          setLoading(false);
        }
      };

      fetchResults();
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-2xl border border-gray-200">
     
            <div className="relative">
  <input
    ref={inputRef}
    type="text"
    value={query}
    onChange={(e) => {
      setQuery(e.target.value);
      setActiveIndex(0);
    }}
    placeholder="Search products... (press /)"
    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none bg-white"
  />
  <span className="absolute left-3 top-2.5 text-gray-400 text-lg">🔍</span>
</div>

        <ul className="mt-4 space-y-2">
          {loading && <li className="text-gray-500">Loading...</li>}
          {!loading && results.length === 0 && query.length >= 2 && (
            <li className="text-gray-500">No results found</li>
          )}
          {results.map((item, index) => (
         
            <li
           className={`cursor-pointer p-3 border rounded-md shadow-sm transition ${
          index === activeIndex ? "bg-gray-100 border-blue-300" : "hover:bg-gray-50"
           }`}
           onClick={() => {
           navigate(`/products/${item.id}`);
           onClose();
            }}
            >
          <div className="font-semibold">{item.title}</div>
         <div className="text-sm text-gray-500 truncate">{item.description}</div>
          </li>

          ))}
        </ul>

      
        <button
       onClick={onClose}
       className="mt-6 w-full py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition"
         >
       Close
      </button>

      </div>
    </div>
  );
};

export default SearchModal;

