const ProductGrid = () => {
  const products = [
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
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar && "½"}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
            <div className="bg-gray-50 p-4 flex justify-center">
              <img 
                src={product.img} 
                alt={product.name}
                className="h-40 object-contain"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-red-500">${product.price}</span>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400 text-sm">{renderStars(product.rating)}</span>
                  <span className="text-gray-500 text-xs">({product.reviews})</span>
                </div>
              </div>
              <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;