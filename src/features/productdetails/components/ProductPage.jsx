import { useState } from "react";
import { FiShoppingCart, FiHeart, FiEye } from "react-icons/fi";

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const colors = [
    { name: "Black", class: "bg-black" },
    { name: "Red", class: "bg-red-500" },
    { name: "Blue", class: "bg-blue-500" },
  ];

  const relatedProducts = [
    {
      id: 1,
      name: "MARTI HV-010 Gamepad",
      price: 2100,
      rating: 4.0,
      reviews: 64,
      img: "https://via.placeholder.com/200x200"
    },
    {
      id: 2,
      name: "AK-500 Wired Keyboard",
      price: 2850,
      rating: 4.7,
      reviews: 55,
      img: "https://via.placeholder.com/200x200"
    },
    {
      id: 3,
      name: "PPL LCD Gaming Monitor",
      price: 5120,
      rating: 4.9,
      reviews: 91,
      img: "https://via.placeholder.com/200x200"
    },
    {
      id: 4,
      name: "RSI Rapid CPU Cooler",
      price: 910,
      rating: 4.6,
      reviews: 60,
      img: "https://via.placeholder.com/200x200"
    },
  ];

  const renderStars = (rating) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        Home / Games / <span className=" text-gray-800">Havic HV G-92 Gamepad</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-lg p-8">
            <img 
              src="https://via.placeholder.com/400x400" 
              alt="Havic HV G-92 Gamepad"
              className="w-full h-80 object-contain"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Havic HV G-92 Gamepad</h1>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-yellow-400">
              {renderStars(4.5)}
              <span className="text-gray-500 text-sm ml-2">(150 reviews)</span>
            </div>
            <span className="text-green-600 text-sm font-medium">In Stock</span>
          </div>

          <div className="text-2xl font-bold text-gray-900">192.00</div>

          <p className="text-gray-600 leading-relaxed">
            Appropriate for hardware-to-storage platform and a plan on the owner of a home 
            or car package. New results in three more manufacturers available.
          </p>

          {/* Colors */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Colours:</h3>
            <div className="flex space-x-3">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === index ? "border-blue-500" : "border-gray-300"
                  } ${color.class}`}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size (Placeholder) */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Size:</h3>
            <div className="flex space-x-3">
              {[1, 2, 3].map((size) => (
                <button
                  key={size}
                  className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:border-blue-500 hover:text-blue-500"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                -
              </button>
              <span className="px-4 py-2 border-l border-r border-gray-300">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                +
              </button>
            </div>

            <button className="flex-1 bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition flex items-center justify-center space-x-2">
              <FiShoppingCart />
              <span>Add To Cart</span>
            </button>

            <button className="p-3 border border-gray-300 rounded-lg hover:border-gray-400 transition">
              <FiHeart className="text-gray-600" />
            </button>

            <button className="p-3 border border-gray-300 rounded-lg hover:border-gray-400 transition">
              <FiEye className="text-gray-600" />
            </button>
          </div>

          {/* Delivery Info */}
          <div className="space-y-4 p-6 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">
                  
                 

                </span>
              </div>
              <div>
                <h4 className="font-semibold">Free Delivery</h4>
                <p className="text-sm text-gray-600">Use your access code to perform continuity</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">↻</span>
              </div>
              <div>
                <h4 className="font-semibold">Record Delivery</h4>
                <p className="text-sm text-gray-600">Use iPhone Home/phone Tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden bg-white hover:shadow-lg transition">
              <div className="bg-gray-100 p-4">
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full h-40 object-contain"
                />
              </div>
              <div className="p-4">
                <h4 className="font-medium text-gray-700 mb-2">{product.name}</h4>
                <div className="flex items-center justify-between">
                  <p className="text-red-500 font-bold">${product.price}</p>
                  <div className="flex items-center text-yellow-400">
                    <span className="text-sm">{product.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;