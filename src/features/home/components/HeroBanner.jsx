// // const HeroBanner = () => {
// //   return (
// //     <section className="w-full bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 py-10">
// //       {/* النص */}
// //       <div className="flex-1 space-y-4">
// //         <h2 className="text-2xl md:text-4xl font-bold font-poppins">
// //          Apple i14 Series
// //         </h2>
// //         <p className="text-sm md:text-base">
// //           Up to <span className="text-red-500 font-semibold">10% off</span> Voucher
// //         </p>
// //         <a
// //           href="/products"
// //           className="inline-block bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
// //         >
// //           Shop Now →
// //         </a>
// //       </div>

// //       {/* الصورة */}
// //       <div className="flex-1 flex justify-center mt-6 md:mt-0">
// //         <img
// //           src="./src/assets/hero.png"
// //           alt="iPhone 14"
// //           className="max-w-xs md:max-w-md"
// //         />
// //       </div>
// //     </section>
// //   );
// // };

// // export default HeroBanner;







import { Link } from "react-router-dom";
import iphoneImage from "../../../assets/hero.png";
// import AppleIcon from "../../../assets/icons/apple-icon.svg";
const HeroBanner = () => {
  return (
    <section className="bg-gray-100 rounded-lg p-6 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">
      {/* النصوص */}
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-poppins">
          iPhone 14 Series
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6 font-poppins">
          Up to 10% off Voucher
        </p>
        <Link
          to="/products"
          className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition font-poppins"
        >
          Shop Now
        </Link>
      </div>

      {/* الصورة */}
      <div className="flex-1">
        <img
          src={iphoneImage}
          alt="iPhone 14"
          className="w-full h-auto max-h-80 object-contain"
        />
      </div>
    </section>
  );
};

export default HeroBanner;

