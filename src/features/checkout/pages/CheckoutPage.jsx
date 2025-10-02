// import React from "react";

// const CheckoutPage = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
//       {/* Billing Details */}
//       <div>
//         <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
//         <form className="space-y-4">
//           <input type="text" placeholder="First Name*" className="w-full border px-4 py-2" />
//           <input type="text" placeholder="Company Name" className="w-full border px-4 py-2" />
//           <input type="text" placeholder="Street Address*" className="w-full border px-4 py-2" />
//           <input type="text" placeholder="Apartment, floor, etc." className="w-full border px-4 py-2" />
//           <input type="text" placeholder="Town/City*" className="w-full border px-4 py-2" />
//           <input type="tel" placeholder="Phone Number*" className="w-full border px-4 py-2" />
//           <input type="email" placeholder="Email Address*" className="w-full border px-4 py-2" />

//           <label className="flex items-center gap-2">
//             <input type="checkbox" />
//             <span>Save this information for faster check-out next time.</span>
//           </label>
//         </form>
//       </div>

//       {/* Order Summary */}
//       <div>
//         <h2 className="text-2xl font-semibold mb-4">Your Order</h2>
//         <div className="space-y-2 text-sm">
//           <div className="flex justify-between">
//             <span>LCD Monitor</span>
//             <span>$650</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Subtotal</span>
//             <span>$650</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Shipping</span>
//             <span>$100</span>
//           </div>
//           <div className="flex justify-between font-bold">
//             <span>Total</span>
//             <span>$750</span>
//           </div>
//         </div>

//         <input
//           type="text"
//           placeholder="Coupon Code"
//           className="w-full border px-4 py-2 mt-4"
//         />

//         <button className="w-full bg-red-500 text-white py-2 mt-4 rounded hover:bg-red-600">
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;



// import React from "react";

// const CheckoutPage = () => {
//   return (
//     <div className="bg-white min-h-screen pt-20 px-4 lg:px-24">
//       {/* روابط التنقل */}
//       <div className="text-sm text-gray-500 mb-6">
//       <div className="text-sm text-gray-500 mb-6">
//   <span className="text-black">Account</span> / 
//   <span className="text-black">My Account</span> / 
//   <span className="text-black">Product</span> / 
//   <span className="text-black">View Cart</span> / 
//   <span>Checkout</span>
// </div>

//       </div>

//       <div className="flex flex-col lg:flex-row gap-12">
//         {/* يسار: Billing Details */}
//         <div className="lg:w-2/3">
//           <h2 className="text-[24px] font-medium mb-6">Billing Details</h2>

//           <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input type="text" placeholder="First Name*" className="border-b border-gray-400 py-2 focus:outline-none" />
//             <input type="text" placeholder="Company Name" className="border-b border-gray-400 py-2 focus:outline-none" />
//             <input type="text" placeholder="Street Address*" className="border-b border-gray-400 py-2 focus:outline-none col-span-2" />
//             <input type="text" placeholder="Apartment, floor, etc." className="border-b border-gray-400 py-2 focus:outline-none col-span-2" />
//             <input type="text" placeholder="Town/City*" className="border-b border-gray-400 py-2 focus:outline-none" />
//             <input type="text" placeholder="Phone Number*" className="border-b border-gray-400 py-2 focus:outline-none" />
//             <input type="email" placeholder="Email Address*" className="border-b border-gray-400 py-2 focus:outline-none col-span-2" />

//             <label className="flex items-center gap-2 col-span-2 mt-2">
//               <input type="checkbox" className="accent-red-500" />
//               <span className="text-sm text-gray-600">Save this information for faster check-out next time</span>
//             </label>
//           </form>
//         </div>

//         {/* يمين: Your Order */}
//         <div className="lg:w-1/3 bg-[#F5F5F5] p-6 rounded-md">
//           <h2 className="text-[20px] font-medium mb-4">Your Order</h2>

//           <div className="flex justify-between mb-2 text-sm">
//             <span>LCD Monitor</span>
//             <span>$650</span>
//           </div>
//           <div className="flex justify-between mb-2 text-sm">
//             <span>Subtotal</span>
//             <span>$650</span>
//           </div>
//           <div className="flex justify-between mb-2 text-sm">
//             <span>Shipping</span>
//             <span>$100</span>
//           </div>
//           <div className="flex justify-between font-semibold text-lg mt-4 mb-6">
//             <span>Total</span>
//             <span>$750</span>
//           </div>

//           {/* خيارات الدفع */}
//           <div className="mb-4">
//             <label className="flex items-center gap-2 mb-2">
//               <input type="radio" name="payment" className="accent-red-500" />
//               <span>Bank</span>
//             </label>
//             <label className="flex items-center gap-2">
//               <input type="radio" name="payment" className="accent-red-500" />
//               <span>Cash on delivery</span>
//             </label>
//           </div>

//           {/* أيقونات الدفع */}
//           <div className="flex gap-4 mb-6">
//             <img src="/icons/visa.png" alt="Visa" className="w-10 h-6" />
//             <img src="/icons/mastercard.png" alt="MasterCard" className="w-10 h-6" />
//             <img src="/icons/paypal.png" alt="PayPal" className="w-10 h-6" />
//           </div>

//           {/* كود القسيمة */}
//           <input type="text" placeholder="Coupon Code" className="w-full border border-gray-300 py-2 px-3 mb-4 focus:outline-none" />

//           {/* زر الطلب */}
//           <button className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 text-sm">
//             Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;


// import React, { useState } from "react";
// import { useCartStore } from "../../cart/store/cartStore";
// import { Link, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// const CheckoutPage = () => {
//   const { cart, clearCart } = useCartStore();
//   const navigate = useNavigate();
//   const [coupon, setCoupon] = useState("");

//   const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
//   const shipping = 0; // مجاني حسب التصميم
//   const total = subtotal + shipping;

//   const handlePlaceOrder = () => {
//     clearCart();
//     toast.success("Order placed successfully!");
//     navigate("/"); // أو "/success" إذا بدك صفحة تأكيد
//   };

//   return (
//     <div className="bg-white min-h-screen pt-20 px-4 lg:px-24">
//       {/* روابط التنقل */}
//       <div className="text-sm text-gray-500 mb-6">
//         <Link to="/" className="text-black hover:underline">Account</Link> / 
//         <Link to="/login" className="text-black hover:underline">My Account</Link> / 
//         <Link to="/products" className="text-black hover:underline">Product</Link> / 
//         <Link to="/cart" className="text-black hover:underline">View Cart</Link> / 
//         <span>Checkout</span>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-12">
//         {/* يسار: Billing Details */}
//         <div className="lg:w-2/3">
//           <h2 className="text-[24px] font-medium mb-6">Billing Details</h2>

//           <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input type="text" placeholder="First Name*" className="border-b border-gray-400 py-2 focus:outline-none" />
//             <input type="text" placeholder="Company Name" className="border-b border-gray-400 py-2 focus:outline-none" />
//             <input type="text" placeholder="Street Address*" className="border-b border-gray-400 py-2 focus:outline-none col-span-2" />
//             <input type="text" placeholder="Apartment, floor, etc." className="border-b border-gray-400 py-2 focus:outline-none col-span-2" />
//             <input type="text" placeholder="Town/City*" className="border-b border-gray-400 py-2 focus:outline-none" />
//             <input type="text" placeholder="Phone Number*" className="border-b border-gray-400 py-2 focus:outline-none" />
//             <input type="email" placeholder="Email Address*" className="border-b border-gray-400 py-2 focus:outline-none col-span-2" />

//             <label className="flex items-center gap-2 col-span-2 mt-2">
//               <input type="checkbox" className="accent-red-500" />
//               <span className="text-sm text-gray-600">Save this information for faster check-out next time</span>
//             </label>
//           </form>
//         </div>

//         {/* يمين: Your Order */}
//         <div className="lg:w-1/3 bg-[#F5F5F5] p-6 rounded-md">
//           <h2 className="text-[20px] font-medium mb-4">Your Order</h2>

//           {/* المنتجات من السلة */}
//           {cart.map((item) => (
//             <div key={item.id} className="flex justify-between mb-2 text-sm">
//               <span>{item.title}</span>
//               <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
//             </div>
//           ))}

//           <div className="flex justify-between mb-2 text-sm">
//             <span>Subtotal</span>
//             <span>${subtotal.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mb-2 text-sm">
//             <span>Shipping</span>
//             <span>Free</span>
//           </div>
//           <div className="flex justify-between font-semibold text-lg mt-4 mb-6">
//             <span>Total</span>
//             <span>${total.toFixed(2)}</span>
//           </div>

//           {/* خيارات الدفع */}
//           <div className="mb-4">
//             <label className="flex items-center gap-2 mb-2">
//               <input type="radio" name="payment" className="accent-red-500" />
//               <span>Bank</span>
//             </label>
//             <label className="flex items-center gap-2">
//               <input type="radio" name="payment" className="accent-red-500" />
//               <span>Cash on delivery</span>
//             </label>
//           </div>

//           {/* أيقونات الدفع */}
//           <div className="flex gap-4 mb-6">
//             <img src="/icons/kpay.png" alt="KPay" className="w-10 h-6" />
//             <img src="/icons/visa.png" alt="Visa" className="w-10 h-6" />
//             <img src="/icons/mastercard.png" alt="MasterCard" className="w-10 h-6" />
//             <img src="/icons/paypal.png" alt="PayPal" className="w-10 h-6" />
//           </div>

//           {/* كود القسيمة */}
//           <div className="flex gap-2 mb-4">
//             <input
//               type="text"
//               value={coupon}
//               onChange={(e) => setCoupon(e.target.value)}
//               placeholder="Coupon Code"
//               className="w-full border border-gray-300 py-2 px-3 focus:outline-none"
//             />
//             <button
//               type="button"
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm"
//               onClick={() => toast.success("Coupon applied!")}
//             >
//               Apply Coupon
//             </button>
//           </div>

//           {/* زر الطلب */}
//           <button
//             onClick={handlePlaceOrder}
//             className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 text-sm"
//           >
//             Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;


// import React, { useState } from "react";
// import { useCartStore } from "../../cart/store/cartStore";
// import { Link, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// const CheckoutPage = () => {
//   const { cart, clearCart } = useCartStore();
//   const navigate = useNavigate();
//   const [coupon, setCoupon] = useState("");

//   const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
//   const shipping = 0;
//   const total = subtotal + shipping;

//   const handlePlaceOrder = () => {
//     clearCart();
//     toast.success("Order placed successfully!");
//     navigate("/");
//   };

//   return (
//     <div className="bg-white min-h-screen pt-20 px-4 lg:px-24">
    

//       {/* 🧭 روابط التنقل */}
//       <div className="text-sm text-gray-500 mb-6">
//         <Link to="/" className="text-black hover:underline">Account</Link> / 
//         <Link to="/login" className="text-black hover:underline">My Account</Link> / 
//         <Link to="/products" className="text-black hover:underline">Product</Link> / 
//         <Link to="/cart" className="text-black hover:underline">View Cart</Link> / 
//         <span>Checkout</span>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-12">
//         {/* 📝 يسار: Billing Details */}
//         <div className="lg:w-2/3">
//           <h2 className="text-[24px] font-medium mb-6">Billing Details</h2>

//           <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input type="text" placeholder="First Name*" className="border-b border-gray-400 py-2 focus:outline-none" />
//             <input type="text" placeholder="Company Name" className="border-b border-gray-400 py-2 focus:outline-none" />
//             <input type="text" placeholder="Street Address*" className="border-b border-gray-400 py-2 focus:outline-none col-span-2" />
//             <input type="text" placeholder="Apartment, floor, etc." className="border-b border-gray-400 py-2 focus:outline-none col-span-2" />
//             <input type="text" placeholder="Town/City*" className="border-b border-gray-400 py-2 focus:outline-none" />
//             <input type="text" placeholder="Phone Number*" className="border-b border-gray-400 py-2 focus:outline-none" />
//             <input type="email" placeholder="Email Address*" className="border-b border-gray-400 py-2 focus:outline-none col-span-2" />

//             <label className="flex items-center gap-2 col-span-2 mt-2">
//               <input type="checkbox" className="accent-red-500" />
//               <span className="text-sm text-gray-600">Save this information for faster check-out next time</span>
//             </label>
//           </form>
//         </div>

//         {/* 📦 يمين: Your Order */}
//         <div className="lg:w-1/3 bg-[#F5F5F5] p-6 rounded-md">
//           <h2 className="text-[20px] font-medium mb-4">Your Order</h2>

//           {cart.map((item) => (
//             <div key={item.id} className="flex justify-between mb-2 text-sm">
//               <span>{item.title}</span>
//               <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
//             </div>
//           ))}

//           <div className="flex justify-between mb-2 text-sm">
//             <span>Subtotal</span>
//             <span>${subtotal.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mb-2 text-sm">
//             <span>Shipping</span>
//             <span>Free</span>
//           </div>
//           <div className="flex justify-between font-semibold text-lg mt-4 mb-6">
//             <span>Total</span>
//             <span>${total.toFixed(2)}</span>
//           </div>

//           {/* 💳 خيارات الدفع */}
//           <div className="mb-4">
//             <label className="flex items-center gap-2 mb-2">
//               <input type="radio" name="payment" className="accent-red-500" />
//               <span>Bank</span>
//             </label>
//             <label className="flex items-center gap-2">
//               <input type="radio" name="payment" className="accent-red-500" defaultChecked />
//               <span>Cash on delivery</span>
//             </label>
//           </div>

//           {/* 🖼️ أيقونات الدفع */}
//           <div className="flex gap-4 mb-6">
//             <img src="/icons/visa.png" alt="Visa" className="w-10 h-6" />
//             <img src="/icons/mastercard.png" alt="MasterCard" className="w-10 h-6" />
//             <img src="/icons/paypal.png" alt="PayPal" className="w-10 h-6" />
//           </div>

//           {/* 🎟️ كود الخصم */}
//           <div className="flex gap-2 mb-4">
//             <input
//               type="text"
//               value={coupon}
//               onChange={(e) => setCoupon(e.target.value)}
//               placeholder="Coupon Code"
//               className="w-full border border-gray-300 py-2 px-3 focus:outline-none"
//             />
//             <button
//               type="button"
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm"
//               onClick={() => toast.success("Coupon applied!")}
//             >
//               Apply Coupon
//             </button>
//           </div>

//           {/* ✅ زر الطلب */}
//           <button
//             onClick={handlePlaceOrder}
//             className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 text-sm"
//           >
//             Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;





// import React, { useState } from "react";
// import { useCartStore } from "../../cart/store/cartStore";
// import { Link, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// const CheckoutPage = () => {
//   const { cart, clearCart } = useCartStore();
//   const navigate = useNavigate();
//   const [coupon, setCoupon] = useState("");

//   const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
//   const shipping = 0;
//   const total = subtotal + shipping;

//   const handlePlaceOrder = () => {
//     if (cart.length === 0) {
//       toast.error("Your cart is empty!");
//       return;
//     }

//     clearCart();
//     toast.success("Order placed successfully!");
//     navigate("/order-success"); // أو "/" إذا ما عندك صفحة تأكيد
//   };

//   return (
//     <div className="bg-white min-h-screen pt-0 px-4 lg:px-24">
//       {/* روابط التنقل */}
//       <div className="text-sm text-gray-500 mb-6 text-left relative top-[-60px] ">
//         <Link to="/" className="text-black hover:underline">Account</Link> / 
//         <Link to="/login" className="text-black hover:underline">My Account</Link> / 
//         <Link to="/products" className="text-black hover:underline">Product</Link> / 
//         <Link to="/cart" className="text-black hover:underline">View Cart</Link> / 
//         <span>Checkout</span>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-12">
//         {/* يسار: Billing Details */}
//         <div className="lg:w-[470px] flex flex-col gap-6">
//   <h2 className="text-[24px] font-medium mb-2">Billing Details</h2>

//   <form className="flex flex-col gap-6">
//     {[
//       { label: "First Name*", type: "text" },
//       { label: "Company Name", type: "text" },
//       { label: "Street Address*", type: "text" },
//       { label: "Apartment, floor, etc. (optional)", type: "text" },
//       { label: "Town/City*", type: "text" },
//       { label: "Phone Number*", type: "text" },
//       { label: "Email Address*", type: "email" },
//     ].map((field, index) => (
//       <div key={index} className="flex flex-col items-start gap-1">
//         <label className="text-sm text-gray-700 ">{field.label}</label>
//         <input
//           type={field.type}
//           className="w-full bg-[#f7f7f7] border border-gray-300 py-2 px-3 rounded focus:outline-none"
//         />
//       </div>
//     ))}

//     <label className="flex items-center gap-2 mt-2">
//       <input type="checkbox" className="accent-red-500" />
//       <span className="text-sm text-gray-600">Save this information for faster check-out next time</span>
//     </label>
//   </form>
// </div>

      
//             <div className="w-[480px] h-fit flex flex-col gap-4 p-6 rounded-md mt-[60px] ml-[40px] ">
  

//   {/* المنتجات */}
// {cart.map((item) => (
//   <div key={item.id} className="flex items-center justify-between mb-4 text-sm">
//     <div className="flex items-center gap-4">
//       <img
//         src={item.image}
//         alt={item.title}
//         className="w-14 h-14 object-cover rounded"
//       />
//       <span className="text-gray-800">{item.title}</span>
//     </div>
//     <span className="text-gray-700 font-medium">
//       ${(item.price * (item.quantity || 1)).toFixed(2)}
//     </span>
//   </div>
// ))}

//       {/* Subtotal */}
//   <div className="flex justify-between mb-2 text-sm font-medium text-gray-800">
//     <span>Subtotal</span>
//     <span>{`$${subtotal.toFixed(2)}`}</span>

//   </div>


// {/* shipping */}
//     <div className="flex justify-between mb-2 text-sm">
//       <span>Shipping</span>
//       <span>Free</span>
//     </div>
//     {/* Total */}
//     <div className="flex justify-between font-semibold text-lg mt-4">
//       <span>Total</span>
//       <span>{`$${total.toFixed(2)}`}</span>
//     </div>
//   </div>

//   {/* الدفع */}
//   <div className="mb-4">
//     <label className="flex items-center gap-2 mb-2">
//       <input type="radio" name="payment" className="accent-red-500" />
//       <span>Bank</span>
//       <div className="flex gap-2 ml-2">
//         <img src="/icons/visa.png" alt="Visa" className="w-6 h-4" />
//         <img src="/icons/mastercard.png" alt="MasterCard" className="w-6 h-4" />
//         <img src="/icons/paypal.png" alt="PayPal" className="w-6 h-4" />
//       </div>
//     </label>
//     <label className="flex items-center gap-2">
//       <input type="radio" name="payment" className="accent-red-500" defaultChecked />
//       <span>Cash on delivery</span>
//     </label>
//   </div>

//   {/* كود الخصم */}
//   <div className="flex gap-2 mb-4">
//     <input
//       type="text"
//       value={coupon}
//       onChange={(e) => setCoupon(e.target.value)}
//       placeholder="Coupon Code"
//       className="bg-white w-2/3 border border-gray-300 py-2 px-3 rounded focus:outline-none"
//     />
//     <button
//       type="button"
//       className="w-1/3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm"
//       onClick={() => toast.success("Coupon applied!")}
//     >
//       Apply Coupon
//     </button>
//   </div>

//   {/* زر الطلب */}
//   <button
//     onClick={handlePlaceOrder}
//     className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 text-sm"
//   >
//     Place Order
//   </button>
// </div>


//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;




import React, { useState } from "react";
import { useCartStore } from "../../cart/store/cartStore";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CheckoutPage = () => {
  const { cart, clearCart } = useCartStore();
  console.log("محتوى السلة:", cart);

  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");

  const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    clearCart();
    toast.success("Order placed successfully!");
    navigate("/order-success");
  };

  return (
    <div className="bg-white min-h-screen pt-0 px-4 lg:px-24">
      {/* روابط التنقل */}
      <div className="text-sm text-gray-500 mb-6 text-left relative top-[-60px]">
        <Link to="/" className="text-black hover:underline">Account</Link> / 
        <Link to="/login" className="text-black hover:underline">My Account</Link> / 
        <Link to="/products" className="text-black hover:underline">Product</Link> / 
        <Link to="/cart" className="text-black hover:underline">View Cart</Link> / 
        <span>Checkout</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* يسار: Billing Details */}
        <div className="lg:w-[470px] flex flex-col gap-6">
          <h2 className="text-[24px] font-medium mb-2">Billing Details</h2>
          <form className="flex flex-col gap-6">
            {[
              { label: "First Name*", type: "text" },
              { label: "Company Name", type: "text" },
              { label: "Street Address*", type: "text" },
              { label: "Apartment, floor, etc. (optional)", type: "text" },
              { label: "Town/City*", type: "text" },
              { label: "Phone Number*", type: "text" },
              { label: "Email Address*", type: "email" },
            ].map((field, index) => (
              <div key={index} className="flex flex-col items-start gap-1">
                <label className="text-sm text-gray-700">{field.label}</label>
                <input
                  type={field.type}
                  className="w-full bg-[#f7f7f7] border border-gray-300 py-2 px-3 rounded focus:outline-none"
                />
              </div>
            ))}
            <label className="flex items-center gap-2 mt-2">
              <input type="checkbox" className="accent-red-500" />
              <span className="text-sm text-gray-600">Save this information for faster check-out next time</span>
            </label>
          </form>
        </div>

        {/* يمين: Your Order */}
        <div className="w-[480px] h-fit flex flex-col gap-0 p-6 rounded-md mt-[60px] ml-[40px]">
          {/* المنتجات */}
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4 text-sm">
              <div className="flex items-center gap-4">
               <img src={item.images?.[0]} alt={item.title} className="w-14 h-14 object-cover rounded" />

                <span className="text-gray-800">{item.title}</span>
              </div>
              <span className="text-gray-700 font-medium">
                {`$${(item.price * (item.quantity || 1)).toFixed(2)}`}
              </span>
            </div>
          ))}

          {/* Subtotal */}
          <div className="flex justify-between mb-2 text-sm font-medium text-gray-800">
            <span>Subtotal</span>
            <span>{`$${subtotal.toFixed(2)}`}</span>
          </div>

          {/* Shipping */}
          <div className="flex justify-between mb-2 text-sm">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          {/* Total */}
          <div className="flex justify-between font-semibold text-lg mt-4">
            <span>Total</span>
            <span>{`$${total.toFixed(2)}`}</span>
          </div>

          {/* الدفع */}
          <div className="mb-4">
            <label className="flex items-center gap-2 mb-2">
              <input type="radio" name="payment" className="accent-red-500" />
              <span>Bank</span>
              <div className="flex gap-2 ml-2">
                <img src="/icons/visa.png" alt="Visa" className="w-6 h-4" />
                <img src="/icons/mastercard.png" alt="MasterCard" className="w-6 h-4" />
                <img src="/icons/paypal.png" alt="PayPal" className="w-6 h-4" />
              </div>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" className="accent-red-500" defaultChecked />
              <span>Cash on delivery</span>
            </label>
          </div>

          {/* كود الخصم */}
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Coupon Code"
              className="bg-white w-2/3 border border-gray-300 py-2 px-3 rounded focus:outline-none"
            />
            <button
              type="button"
              className="w-1/3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm"
              onClick={() => toast.success("Coupon applied!")}
            >
              Apply Coupon
            </button>
          </div>

          {/* زر الطلب */}
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 text-sm"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
