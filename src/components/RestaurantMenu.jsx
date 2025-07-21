import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestoCategory from "./RestoCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (!resInfo) return <Shimmer />;

  /* ---------- Data Extraction ---------- */
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const categoryies =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  /* ---------- UI ---------- */
  return (
    <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 md:px-8 lg:px-0 py-6 sm:py-8">
      {/* ---------- Restaurant Header ---------- */}
      <header className="mb-6 sm:mb-8 text-center sm:text-left">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
          {name}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          {cuisines?.join(", ")}{" "}
          <span className="mx-1 hidden sm:inline">•</span>{" "}
          <span className="block sm:inline">{costForTwoMessage}</span>
        </p>
      </header>

      {/* ---------- Categories Block ---------- */}
      <div className="space-y-4">
        {categoryies.map((category, index) => (
          <RestoCategory
            key={category?.card?.card?.categoryId}
            menuData={category?.card?.card}
            showItem={index === showIndex}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </div>
    </section>
  );
};

export default RestaurantMenu;
