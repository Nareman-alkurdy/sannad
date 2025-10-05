import { useSearchParams } from "react-router-dom";
import heroImage from "../../../assets/hero.png";
import logoSmall from "../../../assets/apple-logo.png";
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
    <aside className="hidden lg:block w-64 bg-white border border-gray-200 p-5  shadow-sm">
      <h3 className="text-lg font-bold mb-4 font-poppins text-gray-800">
        Categories
      </h3>
      <ul className="space-y-3 font-poppins text-sm text-gray-900">
        {categories.map((cat, idx) => (
          <li
            key={idx}
            onClick={() => handleFilter(cat)}
            className="hover:text-black cursor-pointer transition"
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

// 🌟 الهيرو بانر
const HeroBanner = () => {
  return (
    <section className="bg-black p-6 lg:p-12 flex flex-col lg:flex-row items-center 
     justify-between gap-50 flex-1 shadow-md">
      {/* 📝 النصوص */}
      <div className="flex-1.5 text-center lg:text-left">
        {/* 🔹 الشعار والنص الصغير */}
        <div className="flex items-center justify-center lg:justify-start mb-3 space-x-2">
          <img src={logoSmall} alt="Logo" className="w-13 h-14 object-contain" />
          <span className="text-sm font-poppins text-gray-200">
          iPhone 14 series
          </span>
        </div>

        {/* 🏷️ العنوان */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 font-poppins text-white leading-tight">
          Up to 20% Off Voucher
        </h1>

        {/* 📄 الوصف */}
        <p className="text-lg sm:text-xl mb-6 font-poppins text-gray-300">
          Gaming & Tech Deals
        </p>

        {/* 🔗 الزر */}
        <a
          href="/products"
          className="inline-block text-white font-semibold underline px-6 py-3 rounded-lg bg-transparent transition-all font-poppins"
        >
          Shop Now
        </a>
      </div>

      {/* 🖼️ الصورة */}
      <div className="flex-1 flex justify-center">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-75 object-contain"
        />
      </div>
    </section>
  );
};


const HeroSectionWithSidebar = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 bg-gray-50 p-3 m-0">
      <SidebarCategories />
      <HeroBanner />
    </div>
  );
};

export default HeroSectionWithSidebar;
