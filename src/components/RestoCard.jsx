import { CDN_URL } from "../utils/contants";

const RestoCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    sla,
    cuisines = [],
  } = resData?.info || {};

  return (
    <div className="flex flex-col h-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md hover:bg-gray-100">
      {/* Restaurant Image */}
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="mb-3 sm:mb-4 h-36 sm:h-40 md:h-44 w-full rounded-lg object-cover"
      />

      {/* Textual Details */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 truncate">
          {name}
        </h3>

        {/* Cuisines */}
        <p className="mt-1 text-xs sm:text-sm text-gray-500 line-clamp-1">
          {cuisines.join(", ")}
        </p>

        {/* Rating & Delivery */}
        <div className="mt-auto flex flex-wrap items-center justify-between text-xs sm:text-sm font-medium text-gray-700 pt-2">
          <span className="flex items-center gap-1">
            ⭐ <span>{avgRating}</span>
          </span>
          <span className="flex items-center gap-1">
            🚚 <span>{sla?.deliveryTime} min</span>
          </span>
        </div>
      </div>
    </div>
  );
};

// HOC to show "Pure Veg" Label
export const withVegLabel = (RestoCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute top-3 left-0 bg-green-600 text-white text-ml px-2 py-0.5 rounded-r-md z-10">
          Pure Veg
        </span>
        <RestoCard {...props} />
      </div>
    );
  };
};

export default RestoCard;
