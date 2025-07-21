import { useState, useEffect } from "react";
import RestoCard, { withVegLabel } from "./RestoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfResto, setListOfResto] = useState([]);
  const [filteredResto, setFilteredResto] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restoList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setListOfResto(restoList);
    setFilteredResto(restoList);
  };

  const handleSearch = () => {
    const result = listOfResto.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResto(result);
  };

  const handleTopRated = () => {
    const result = listOfResto.filter((res) => res.info.avgRating > 4.5);
    setFilteredResto(result);
  };

  const RestoCardVeg = withVegLabel(RestoCard);

  if (!listOfResto.length) return <Shimmer />;

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-6">
        {/* Filter Bar */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search Input */}
          <div className="flex w-full sm:max-w-md gap-2">
            <input
              type="text"
              placeholder="Search restaurants..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="flex-1 rounded-md border border-gray-300 py-2 px-3 text-sm shadow-sm outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600"
            />
            <button
              onClick={handleSearch}
              className="rounded-md border border-orange-600 px-4 py-2 text-sm font-semibold text-orange-600 transition-all hover:bg-orange-600 hover:text-white"
            >
              Search
            </button>
          </div>

          {/* Top Rated Button */}
          <button
            onClick={handleTopRated}
            className="w-full sm:w-auto rounded-md border border-orange-600 px-4 py-2 text-sm font-semibold text-orange-600 transition-all hover:bg-orange-600 hover:text-white"
          >
            Top Rated Restaurants
          </button>
        </div>

        {/* Restaurant Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredResto.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`}
              className="transform transition-transform duration-300 ease-in-out hover:scale-105"
            >
              {restaurant.info.veg ? (
                <RestoCardVeg resData={restaurant} />
              ) : (
                <RestoCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Body;
