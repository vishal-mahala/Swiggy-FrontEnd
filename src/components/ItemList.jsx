import React from "react";
import { CDN_URL } from "../utils/contants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items, defaultPrice = 0 }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="space-y-6">
      {items.map((item) => {
        const info = item?.card?.info || {};
        const price = (info.price ?? info.defaultPrice ?? defaultPrice) / 100;
        const rating = info.ratings?.aggregatedRating || {};
        const imgUrl = info.imageId;

        return (
          <div
            key={info.id}
            className="flex flex-col sm:flex-row items-start justify-between gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            {/* LEFT SECTION */}
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                {info.name}
              </h3>
              <p className="text-sm text-gray-700 font-medium mb-1">₹{price}</p>
              {rating?.rating && (
                <p className="text-xs font-semibold text-green-700 mb-1">
                  ★ {rating.rating} ({rating.ratingCountV2})
                </p>
              )}
              {info.description && (
                <p className="text-sm text-gray-600 line-clamp-2">
                  {info.description}
                </p>
              )}
            </div>

            {/* IMAGE + ADD BUTTON */}
            <div className="relative w-full sm:w-32 h-24 sm:h-28 flex-shrink-0 mx-auto sm:mx-0">
              <img
                src={CDN_URL + imgUrl}
                alt={info.name}
                className="w-full h-full object-cover rounded-md"
              />
              <button
                onClick={() => handleAddItem(item)}
                className="absolute bottom-[-14px] left-1/2 transform -translate-x-1/2 w-11/12 px-2 py-1 text-xs font-semibold text-green-600 bg-white rounded hover:bg-green-600 hover:text-white transition"
              >
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
