// import { useCartStore } from "../store/cartStore";
// import CartItem from "../components/CartItem";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const { cart } = useCartStore();

//   const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

//   return (
//     <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* يسار: المنتجات */}
//         <div className="lg:col-span-2">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="border-b text-left">
//                 <th className="py-2">Product</th>
//                 <th className="py-2">Price</th>
//                 <th className="py-2">Quantity</th>
//                 <th className="py-2">Subtotal</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map((item, index) => (
//                 <CartItem key={`${item.id}-${index}`} item={item} />
//               ))}
//             </tbody>
//           </table>

//           <div className="flex justify-between mt-6">
//             <Link to="/products" className="border px-4 py-2 rounded hover:bg-gray-100">
//               Return to Shop
//             </Link>
//             <button className="border px-4 py-2 rounded hover:bg-gray-100">
//               Update Cart
//             </button>
//           </div>

//           <div className="mt-8 flex gap-4">
//             <input
//               type="text"
//               placeholder="Coupon Code"
//               className="border px-4 py-2 rounded w-full"
//             />
//             <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
//               Apply Coupon
//             </button>
//           </div>
//         </div>

//         {/* يمين: ملخص السلة */}
//         <div className="border p-6 rounded h-fit">
//           <h3 className="text-lg font-bold mb-4">Cart Total</h3>
//           <div className="flex justify-between mb-2">
//             <span>Subtotal:</span>
//             <span>${subtotal.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mb-2">
//             <span>Shipping:</span>
//             <span>Free</span>
//           </div>
//           <div className="flex justify-between font-semibold text-lg mb-4">
//             <span>Total:</span>
//             <span>${subtotal.toFixed(2)}</span>
//           </div>
//           <Link
//             to="/checkout"
//             className="block bg-red-500 text-white text-center py-2 rounded hover:bg-red-600"
//           >
//             Proceed to Checkout
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;




// const Cart = () => {
//   const { cart, updateQty, removeFromCart } = useCartStore();

//   const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

//   return (
//     <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Breadcrumb */}
//       <div className="text-sm text-gray-500 mb-4">
//         <Link to="/" className="hover:underline">Home</Link> / <span className="text-black font-semibold">Cart</span>
//       </div>

//       {/* Title */}
//       <h2 className="text-2xl font-bold mb-6">Cart</h2>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* يسار: جدول المنتجات */}
//         <div className="lg:col-span-2">
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="border-b text-left font-semibold">
//                 <th className="py-2">Product</th>
//                 <th className="py-2">Price</th>
//                 <th className="py-2">Quantity</th>
//                 <th className="py-2">Subtotal</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map((item, index) => (
//                 <tr key={`${item.id}-${index}`} className="border-b">
//                   <td className="py-4 flex items-center gap-4">
//                     <img src={item.images?.[0]} alt={item.title} className="w-16 h-16 object-cover rounded" />
//                     <span>{item.title}</span>
//                   </td>
//                   <td className="py-4">${item.price}</td>
//                   <td className="py-4">
//                     <input
//                       type="number"
//                       min="1"
//                       value={item.quantity || 1}
//                       onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
//                       className="w-16 border rounded px-2 py-1 text-center"
//                     />
//                   </td>
//                   <td className="py-4">${(item.price * (item.quantity || 1)).toFixed(2)}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* أزرار تحت الجدول */}
//           <div className="flex justify-between mt-6">
//             <Link to="/products" className="border px-4 py-2 rounded hover:bg-gray-100">
//               Return to Shop
//             </Link>
//             <button className="border px-4 py-2 rounded hover:bg-gray-100">
//               Update Cart
//             </button>
//           </div>

//           {/* كود الخصم */}
//           <div className="mt-8 flex gap-4">
//             <input
//               type="text"
//               placeholder="Coupon Code"
//               className="border px-4 py-2 rounded w-full"
//             />
//             <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">
//               Apply Coupon
//             </button>
//           </div>
//         </div>

//         {/* يمين: ملخص السلة */}
//         <div className="border p-6 rounded h-fit">
//           <h3 className="text-lg font-bold mb-4">Cart Total</h3>
//           <div className="flex justify-between mb-2">
//             <span>Subtotal:</span>
//             <span>${subtotal.toFixed(2)}</span>
//           </div>
//           <div className="flex justify-between mb-2">
//             <span>Shipping:</span>
//             <span>Free</span>
//           </div>
//           <div className="flex justify-between font-semibold text-lg mb-4">
//             <span>Total:</span>
//             <span>${subtotal.toFixed(2)}</span>
//           </div>
//           <Link
//             to="/checkout"
//             className="block bg-red-500 text-white text-center py-2 rounded hover:bg-red-600"
//           >
//             Proceed to Checkout
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;





// import { useCartStore } from "../store/cartStore";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const { cart, updateQty } = useCartStore();

//   const subtotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

// const handleUpdateCart = () => {
//   console.log("Cart updated!");
  // ممكن تضيفي رسالة تأكيد أو إعادة تحميل cart من localStorage
//   alert("Cart has been updated successfully!");
// };




//   return (
//     <div className="container mx-auto px-2">
//     <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Breadcrumb */}
//       <div className="text-sm text-gray-500 relative top-[-110px] text-left ">
//         <Link to="/" className="hover:underline text-black">Home</Link> / <span className="text-black font-semibold">Cart</span>
//       </div>

      

      {/* جدول المنتجات */}
      {/* <div className="overflow-x-auto relative top-[-80px]">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b text-left font-semibold">
              <th className="py-2">Product</th>
              <th className="py-2">Price</th>
              <th className="py-2">Quantity</th>
              <th className="py-2">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              // صف المنتج
              <tr key={`${item.id}-${index}`} className="border-b">
                <td className="py-4 flex items-center gap-4 min-w-[200px]">
                  <img src={item.images?.[0]} alt={item.title} className="w-16 h-16 object-cover rounded" />
                  <span>{item.title}</span>
                </td>
                <td className="py-4">${item.price}</td>
                <td className="py-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity || 1}
                    onChange={(e) => {
                    const newQty = parseInt(e.target.value);
                    // updateQty(item.id, newQty);
                    updateQty(item.cartItemId, newQty);

                    console.log("Cart after update:", cart); }}
                    className="w-16 h-10 bg-white text-black border border-gray-400 rounded px-2 text-center appearance-auto focus:outline-none"
                  />
                </td>
                <td className="py-4">${(item.price * (item.quantity || 1)).toFixed(2)}</td>
              </tr>
              
              
            ))} */}

            {/* صف الأزرار */}
  {/* <tr>
    <td colSpan="4" className="py-4">
      <div className="flex justify-between flex-col sm:flex-row gap-4">
        <Link
          to="/products"
          className="bg-white text-black border border-gray-400 px-4 py-2 rounded text-center"
        >
          Return to Shop
        </Link>
        <button
          onClick={handleUpdateCart}
          className="bg-white text-black border border-gray-400 px-4 py-2 rounded"
        >
          Update Cart
        </button>
      </div>
    </td>
  </tr>
          </tbody>

        </table>
      </div> */}
{/* هاد كنت من الاول موقفتو  */}
      {/* أزرار تحت الجدول**
      <div className="flex justify-between mt-6 flex-col sm:flex-row gap-4 relative top-[-50px]">
        <Link to="/products" className="bg-white text-black border border-gray-400 px-4 py-2 rounded text-center">
          Return to Shop
        </Link>
        <button 
        onClick={handleUpdateCart}
        className=" bg-white text-black border border-gray-400 px-4 py-2 rounded">
          Update Cart
        </button>
      </div> */}

      {/* كود الخصم + ملخص السلة */}
      {/* <div className="mt-8 flex flex-col lg:flex-row justify-between gap-8 items-start relative top-[-80px]">
        {/* يسار: كود الخصم */}
//       <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-2/3">
//   <input
//     type="text"
//     placeholder="Coupon Code"
//     className="bg-white text-black border border-gray-400 px-4 py-2 rounded text-sm placeholder-gray-500 focus:outline-none w-[300px]"
//   />
//   <button
//     className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 text-sm whitespace-nowrap"
//   >
//     Apply Coupon
//   </button>
// </div> */}



        {/* يمين: ملخص السلة */}
        {/* <div className="border border-gray-400 p-6 rounded w-full lg:w-1/3 bg-white shadow-sm">
          <h3 className="text-lg font-bold mb-4">Cart Total</h3>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Total:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <Link
            to="/checkout"
            className="block bg-red-500 text-white text-center py-2 rounded hover:bg-red-600"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div></div>
  );
};

export default Cart; */}
 




import { useCartStore } from "../store/cartStore";
import { Link } from "react-router-dom";

const Cart = () => {
const { cart, updateQty } = useCartStore();
const subtotal = cart.reduce((acc, item) =>
   acc + item.price * (item.quantity || 1), 0);
const handleUpdateCart = () => { 
  console.log("Cart updated!");
  // ممكن تضيفي رسالة تأكيد أو إعادة تحميل cart من localStorage
  alert("Cart has been updated successfully!"); };
  return (
  <div className="container mx-auto px-2">
  <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
   {/* Breadcrumb */}
  <div className="text-sm text-gray-500 relative top-[-110px] text-left ">
  <Link to="/" className="hover:underline text-black">Home</Link> /
  <span className="text-black font-semibold">Cart</span>
  </div>
   {/* جدول المنتجات */}
    <div className="overflow-x-auto relative top-[-80px]">
    <table className="min-w-full border-collapse">
     <thead>
   <tr className="border-b text-left font-semibold">
     <th className="py-2">Product</th>
    <th className="py-2">Price</th>
    <th className="py-2">Quantity</th>
    <th className="py-2">Subtotal</th>
    </tr>
    </thead>
     <tbody> {cart.map((item, index) => (
     // صف المنتج
     <tr key={`${item.id}-${index}`} className="border-b">
    <td className="py-4 flex items-center gap-4 min-w-[200px]">
     <img src={item.images?.[0]} alt={item.title} className="w-16 h-16 object-cover rounded" />
     <span>{item.title}</span>
      </td>
     <td className="py-4">${item.price}</td>
    <td className="py-4">
     <input
      typy="number"
       min="1"
        value={item.quantity || 1}
       onChange={(e) => {
     const newQty =
      parseInt(e.target.value);
      updateQty(item.cartItemId, newQty);
  //  console.log("Cart after update:", cart); 
  }}
   className="w-16 h-10 bg-white text-black border border-gray-400 rounded px-2 text-center appearance-auto focus:outline-none" />
     </td>
     <td className="py-4">
     ${(item.price * (item.quantity || 1)).toFixed(2)}</td> </tr>
    ))}
     {/* صف الأزرار */}
    <tr> <td colSpan="4" className="py-4">
    <div className="flex justify-between flex-col sm:flex-row gap-4">
     <Link to="/products" className="bg-white text-black border border-gray-400 px-4 py-2 rounded text-center" >
      Return to Shop </Link>
      <button onClick={handleUpdateCart}
     className="bg-white text-black border border-gray-400 px-4 py-2 rounded" >
        Update Cart
        </button>
           </div> 
              </td> 
         </tr> 
             </tbody>
         </table> 
          </div>
       {/* أزرار تحت الجدول**
         <div className="flex justify-between mt-6 flex-col sm:flex-row gap-4 relative top-[-50px]">
    <Link to="/products" className="bg-white text-black border border-gray-400 px-4 py-2 rounded text-center">
         Return to Shop
       </Link>
       <button onClick={handleUpdateCart} className=" bg-white text-black border border-gray-400 px-4 py-2 rounded">
           Update Cart
         </button>
          </div> */}
   {/* كود الخصم + ملخص السلة */}
 <div className="mt-8 flex flex-col lg:flex-row justify-between gap-8 items-start relative top-[-80px]">
   {/* يسار: كود الخصم */}
   <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-2/3">
   <input type="text" placeholder="Coupon Code" className="bg-white text-black border border-gray-400 px-4 py-2 rounded text-sm placeholder-gray-500 focus:outline-none w-[300px]" />
    <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 text-sm whitespace-nowrap" > Apply Coupon </button> </div>

       {/* يمين: ملخص السلة */}
  <div className="border border-gray-400 p-6 rounded w-full lg:w-1/3 bg-white shadow-sm">
    <h3 className="text-lg font-bold mb-4">Cart Total</h3>
     <div className="flex justify-between mb-2">
      <span>Subtotal:</span>
   <span>${subtotal.toFixed(2)}</span>
    </div>
     <div className="flex justify-between mb-2">
     <span>Shipping:</span>
       <span>Free</span>
    </div>
  <div className="flex justify-between font-semibold text-lg mb-4">
   <span>Total:</span> <span>${subtotal.toFixed(2)}</span>
    </div>

   <Link to="/checkout" className="block bg-red-500 text-white text-center py-2 rounded hover:bg-red-600" >
    Proceed to Checkout
     </Link>
   </div> </div> </div></div> ); };
    export default Cart;



