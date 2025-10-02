import { Link } from "react-router-dom";
// const ProductCard = ({ product }) => {
//   return (
//     <div className="border p-2 rounded shadow hover:shadow-lg transition">
//       <img
//         src={product.images[0]}
//         alt={product.title}
//         className="h-40 w-full object-cover mb-2 rounded"
//       />
//       <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
//       <p className="text-red-500 font-bold">${product.price}</p>
//     </div>
//   );
// };

// export default ProductCard;

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="border p-2 rounded shadow hover:shadow-lg transition">
        <img
          src={product.images[0]}
          alt={product.title}
          className="h-40 w-full object-cover mb-2 rounded"
        />
        <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
        <p className="text-red-500 font-bold">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;