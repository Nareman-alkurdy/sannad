import { useCartStore } from "../store/cartStore";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem"; 

const Cart = () => {
  const { cart } = useCartStore();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const handleUpdateCart = () => {
    console.log("Cart updated!");
    alert("Cart has been updated successfully!");
  };

  return (
    <div className="container mx-auto px-2">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
       
        <div className="text-sm text-gray-500 relative top-[-110px] text-left">
          <Link to="/" className="hover:underline text-black">
            Home
          </Link>{" "}
          / <span className="text-black font-semibold">Cart</span>
        </div>

       
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
            <tbody>
              {cart.map((item, index) => (
                <CartItem key={`${item.id}-${index}`} item={item} />
              ))}

           
              <tr>
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
        </div>

     
        <div className="mt-8 flex flex-col lg:flex-row justify-between gap-8 items-start relative top-[-80px]">
        
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-2/3">
            <input
              type="text"
              placeholder="Coupon Code"
              className="bg-white text-black border border-gray-400 px-4 py-2 rounded text-sm placeholder-gray-500 focus:outline-none w-[300px]"
            />
            <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 text-sm whitespace-nowrap">
              Apply Coupon
            </button>
          </div>

         
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
      </div>
    </div>
  );
};

export default Cart;
