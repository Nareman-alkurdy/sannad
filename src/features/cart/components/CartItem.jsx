import { useCartStore } from "../store/cartStore";

const CartItem = ({ item }) => {
  const { updateQty } = useCartStore();

  return (
    <tr className="border-b">
    
      <td className="py-4 flex items-center gap-4">
        <img
          src={item?.images?.[0] || "https://via.placeholder.com/64x64?text=No+Image"}
          alt={item?.title || "No title"}
          className="w-16 h-16 object-cover rounded"
        />
        <span>{item?.title}</span>
      </td>

     
      <td className="py-4">${item?.price}</td>


      <td className="py-4">
        <input
          type="number"
          min="1"
          value={item?.quantity || 1}
          onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
          className="w-16 h-10 bg-white text-black border border-gray-400 rounded px-2 text-center focus:outline-none"
          style={{
            appearance: "auto",
            WebkitAppearance: "number-input",
           backgroundColor: "#fff",
           border: "1px solid #ccc",
           paddingRight: "6px"
          
          }}
        />

      </td>


      <td className="py-4">
        ${(item?.price * (item?.quantity || 1)).toFixed(2)}
      </td>
    </tr>
  );
};

export default CartItem;
