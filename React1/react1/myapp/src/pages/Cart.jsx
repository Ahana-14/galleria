import { useCart } from "../context/CartContext";
import { formatINR } from "../utils/currency";

function Cart() {
  const { items, updateQuantity, removeItem, clearCart, totals } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border rounded p-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <div className="font-semibold">{item.title}</div>
                <div className="text-gray-600">{formatINR(item.price)}</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 bg-gray-200 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 bg-gray-200 rounded">+</button>
              </div>
              <div className="w-24 text-right font-semibold">{formatINR(item.price * item.quantity)}</div>
              <button onClick={() => removeItem(item.id)} className="text-red-600 hover:underline">Remove</button>
            </div>
          ))}
          <div className="flex justify-between items-center border-t pt-4">
            <div className="text-xl font-bold">Subtotal:</div>
            <div className="text-xl font-bold">{formatINR(totals.subtotal)}</div>
          </div>
          <div className="flex justify-end gap-2">
            <button onClick={clearCart} className="px-4 py-2 border rounded">Clear Cart</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;