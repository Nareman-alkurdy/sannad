// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
//  import { useCartStore } from "../../../features/cart/store/cartStore";
// const Navbar = ({ hideIcons = false }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { cart } = useCartStore();
//   return (
//     <>
    
     
      
// <div className="bg-black text-white w-full">
//   <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="flex justify-between items-center h-10 sm:h-12">
      
     
//       <div className="flex items-center gap-2 sm:gap-4 truncate">
//         <span className="text-[10px] sm:text-xs md:text-sm lg:text-[14px] font-poppins font-normal whitespace-nowrap truncate">
//           Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
//         </span>
//         <Link
//           to="/products"
//           className="text-[10px] sm:text-xs md:text-sm font-poppins font-semibold underline hover:text-gray-300 transition-colors whitespace-nowrap"
//         >
//           Shop Now
//         </Link>
//       </div>

     
//       <div className="flex items-center">
//         <select className="bg-black text-white text-[10px] sm:text-xs md:text-sm font-poppins border-none outline-none cursor-pointer">
//           <option value="en">English</option>
//         </select>
//         <img
//           src="./src/assets/down-arrow.png"
//           alt="Arrow"
//           className="ml-1 sm:ml-2 h-2 w-3"
//         />
//       </div>
//     </div>
//   </div>
// </div>



      
//       <nav className="border-b">
//         <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
           
//             <div className="flex items-center">
//               <Link to="/" className="flex-shrink-0">
//                 <h1 className="text-2xl font-bold font-inter text-black">
//                   Exclusive
//                 </h1>
//               </Link>
//             </div>

          
//             <div className="hidden md:flex items-center space-x-8">
//               <Link
//                 to="/"
//                 className="text-gray-700 hover:text-black px-3 py-2 text-sm font-poppins font-medium border-b-2 border-black"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/contact"
//                 className="text-gray-700 hover:text-black px-3 py-2 text-sm font-poppins font-medium"
//               >
//                 Contact
//               </Link>
//               <Link
//                 to="/about"
//                 className="text-gray-700 hover:text-black px-3 py-2 text-sm font-poppins font-medium"
//               >
//                 About
//               </Link>
//               <Link
//                 to="/signup"
//                 className="text-gray-700 hover:text-black px-3 py-2 text-sm font-poppins font-medium"
//               >
//                 Sign Up
//               </Link>
//             </div>
        


//             <div className="flex items-center space-x-2 sm:space-x-4">
         
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search.. (press /)"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-28 sm:w-48 md:w-64 px-2 sm:px-3 md:px-4 py-1 sm:py-2 pr-8 text-xs sm:text-sm bg-[#F5F5F5] font-poppins border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
//                 />
//                 <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
//                     <img
//                     src="./src/assets/component 2.png"
//                     alt="Search"
//                     className="h-3 w-3 sm:h-4 sm:w-4"
//                   />
//                 </div>
//               </div>

        
//               {!hideIcons && (
//                 <>
//                   <button className="p-1 sm:p-2 text-gray-600 hover:text-black bg-transparent">
//                     <img
//                       src="./src/assets/Wishlist.png"
//                       alt="Wishlist"
//                       className="h-5 w-5 sm:h-6 sm:w-6"
//                       style={{background: 'transparent'}}
//                     />
//                   </button>
//                   <Link to="/cart" className="relative p-1 sm:p-2 text-gray-600 hover:text-black">
//                     <img
//                       src="./src/assets/Cart1_with_buy.png"
//                       alt="Cart"
//                       className="h-5 w-5 sm:h-6 sm:w-6"
//                     />
                  
//                     {cart && cart.length > 0 && (
//                       <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] sm:text-xs rounded-full px-1">
//                         {cart.length}
//                       </span>
//                     )}
//                   </Link>
                  
//                 </>
//               )}

//               <div className="md:hidden flex items-center">
//                 <button
//                   onClick={() => setIsMenuOpen(!isMenuOpen)}
//                   className="text-gray-800"
//                 >
//                   {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

       
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">
//             <Link
//               to="/"
//               onClick={() => setIsMenuOpen(false)}
//               className="block text-gray-700 hover:text-black"
//             >
//               Home
//             </Link>
//             <Link
//               to="/contact"
//               onClick={() => setIsMenuOpen(false)}
//               className="block text-gray-700 hover:text-black"
//             >
//               Contact
//             </Link>
//             <Link
//               to="/about"
//               onClick={() => setIsMenuOpen(false)}
//               className="block text-gray-700 hover:text-black"
//             >
//               About
//             </Link>
//             <Link
//               to="/signup"
//               onClick={() => setIsMenuOpen(false)}
//               className="block text-gray-700 hover:text-black"
//             >
//               Sign Up
//             </Link>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { useCartStore } from "../../../features/cart/store/cartStore";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCartStore();
  const location = useLocation();

  const hideIconsPages = ["/login", "/signup"];
  const shouldHideIcons = hideIconsPages.includes(location.pathname);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-black text-white w-full sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-10 sm:h-12 gap-1 sm:gap-2">
            {/* نص الإعلان */}
            <span className="text-[10px] sm:text-xs md:text-sm lg:text-[14px] font-poppins font-normal whitespace-nowrap">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </span>

            {/* رابط Shop Now */}
            <Link
              to="/products"
              className="text-[10px] sm:text-xs md:text-sm font-poppins font-semibold underline hover:text-gray-300 transition-colors whitespace-nowrap"
            >
              Shop Now
            </Link>

            {/* لغة */}
            <select className="bg-black text-white text-[10px] sm:text-xs md:text-sm font-poppins border-none outline-none cursor-pointer ml-2">
              <option value="en">English</option>
            </select>

            <img
              src="./src/assets/down-arrow.png"
              alt="Arrow"
              className="ml-1 h-2 w-3 sm:h-2 sm:w-3"
            />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="border-b bg-white sticky top-[2.5rem] z-50">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* شعار الموقع */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold font-inter text-black">
                  Exclusive
                </h1>
              </Link>
            </div>

            {/* روابط القوائم */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-black px-3 py-2 text-sm font-poppins font-medium border-b-2 border-black"
              >
                Home
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-black px-3 py-2 text-sm font-poppins font-medium"
              >
                Contact
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-black px-3 py-2 text-sm font-poppins font-medium"
              >
                About
              </Link>
              <Link
                to="/signup"
                className="text-gray-700 hover:text-black px-3 py-2 text-sm font-poppins font-medium"
              >
                Sign Up
              </Link>
            </div>

            {/* أيقونات البحث والكارت والملف الشخصي */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* صندوق البحث */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search.. (press /)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-28 sm:w-48 md:w-64 px-2 sm:px-3 md:px-4 py-1 sm:py-2 pr-8 text-xs sm:text-sm bg-[#F5F5F5] font-poppins border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all" />
                  
                <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
                  <img
                    src="./src/assets/component 2.png"
                    alt="Search"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                  />
                </div>
              </div>

              {/* إخفاء الأيقونات إذا كانت الصفحة login أو signup */}
              {!shouldHideIcons && (
                <>
                  {/* Wishlist */}
                  <Link
                    to="/wishlist"
                    className="p-1 sm:p-2 text-gray-600 hover:text-black bg-transparent"
                  >
                    <img
                      src="./src/assets/Wishlist.png"
                      alt="Wishlist"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                      style={{ background: "transparent" }}
                    />
                  </Link>

                  {/* Cart */}
                  <Link
                    to="/cart"
                    className="relative p-1 sm:p-2 text-gray-600 hover:text-black"
                  >
                    <img
                      src="./src/assets/Cart1_with_buy.png"
                      alt="Cart"
                      className="h-5 w-5 sm:h-6 sm:w-6"
                    />
                    {cart && cart.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] sm:text-xs rounded-full px-1">
                        {cart.length}
                      </span>
                    )}
                  </Link>

                  {/* Profile */}
                  <Link
                    to="/profile"
                    className="p-1 sm:p-2 text-gray-600 hover:text-black bg-transparent"
                  >
                    <PersonOutlineIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </Link>
                </>
              )}

              {/* قائمة الهاتف */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-800"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* القائمة المنسدلة للهاتف */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-black"
            >
              Home
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-black"
            >
              Contact
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-black"
            >
              About
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-700 hover:text-black"
            >
              Sign Up
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;