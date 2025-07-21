import { useDispatch, useSelector } from "react-redux";
import CartItemList from "./CartItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-4xl mx-auto w-full">
        {/* Heading and Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
            Cart
          </h1>

          <button
            onClick={handleClearCart}
            className="w-full sm:w-auto px-4 py-2 text-sm font-semibold border bg-white text-orange-600 border-orange-600 rounded hover:bg-orange-600 hover:text-white transition"
          >
            Clear Cart
          </button>
        </div>

        {/* Cart Items */}
        <div className="rounded-lg border border-gray-200 bg-white p-4 sm:p-6 shadow-sm transition hover:shadow-md">
          {cartItem.length === 0 ? (
            <h1 className="font-semibold text-center text-lg sm:text-xl">
              Add Items to your cart ❤️
            </h1>
          ) : (
            <CartItemList items={cartItem} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
