import { useCartStore } from "../store/cartStore";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQty } = useCartStore();

  return (
    <tr className="border-b">
      <td className="py-4 flex items-center gap-4">
        <img src={item.images[0]} alt={item.title} className="w-16 h-16 object-cover rounded" />
        <span>{item.title}</span>
      </td>
      <td className="py-4">${item.price}</td>
      <td className="py-4">
        <div className="flex items-center gap-2">
          <button
            className="px-2 py-1 border rounded bg-gray-100 hover:bg-gray-200"
            onClick={() => updateQty(item.id, (item.quantity || 1) - 1)}
            disabled={item.quantity <= 1}
          >
            <span className="text-lg">&#8592;</span>
          </button>
          <input
            type="number"
            min="1"
            value={item.quantity || 1}
            onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
            className="w-12 border rounded px-2 py-1 text-center"
          />
          <button
            className="px-2 py-1 border rounded bg-gray-100 hover:bg-gray-200"
            onClick={() => updateQty(item.id, (item.quantity || 1) + 1)}
          >
            <span className="text-lg">&#8594;</span>
          </button>
        </div>
      </td>
      <td className="py-4">${(item.price * (item.quantity || 1)).toFixed(2)}</td>
    </tr>
  );
};
export default CartItem

   