import React from "react";
import { CDN_URL } from "../utils/contants";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const CartItemList = ({ items, defaultPrice = 0 }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="space-y-6">
      {items.map((item) => {
        const info = item?.card?.info || {};
        const price = (info.price ?? info.defaultPrice ?? defaultPrice) / 100;
        const rating = info.ratings.aggregatedRating;
        const imgUrl = info.imageId;

        return (
          <div
            key={info.id}
            className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            {/* LEFT: Text */}
            <div className="flex-1">
              <div className="flex flex-col gap-1">
                <span className="text-base sm:text-lg font-medium text-gray-800">
                  {info.name}
                </span>
                <span className="text-sm sm:text-base font-medium text-gray-700">
                  ₹{price}
                </span>
                {rating && (
                  <span className="text-xs font-semibold text-green-700">
                    ★{rating.rating} ({rating.ratingCountV2})
                  </span>
                )}
              </div>

              {info.description && (
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {info.description}
                </p>
              )}
            </div>

            {/* RIGHT: Image + Buttons */}
            <div className="relative w-full sm:w-32 h-32 sm:h-28 mt-4 sm:mt-0 flex-shrink-0 mx-auto">
              <img
                src={CDN_URL + imgUrl}
                alt={info.name}
                className="h-full w-full rounded-md object-cover"
              />

              <div className="absolute -bottom-4 left-1/2 flex gap-2 -translate-x-1/2">
                <button
                  className="text-xl w-9 h-9 flex items-center justify-center border border-gray-300 text-green-600 font-bold rounded bg-white hover:bg-green-600 hover:text-white transition"
                  onClick={() => handleRemoveItem(item)}
                >
                  −
                </button>

                <button
                  className="text-xl w-9 h-9 flex items-center justify-center border border-gray-300 text-green-600 font-bold rounded bg-white hover:bg-green-600 hover:text-white transition"
                  onClick={() => handleAddItem(item)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItemList;
