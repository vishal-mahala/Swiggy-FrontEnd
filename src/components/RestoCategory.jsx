import { useState } from "react";
import ItemList from "./ItemList";
import { motion, AnimatePresence } from "framer-motion";

const RestoCategory = ({ menuData, showItem, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="px-4 sm:px-0">
      <div className="my-6 rounded-xl bg-gray-50 p-4 sm:p-6 shadow-sm transition hover:shadow-md">
        {/* Category Title */}
        <div
          className="mb-4 text-base sm:text-lg font-semibold text-gray-800 flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <span className="truncate">
            {menuData.title} ({menuData.itemCards.length})
          </span>
          <span
            className={`text-lg transition-transform duration-300 ${
              showItem ? "rotate-180 text-orange-600" : "rotate-0"
            }`}
          >
            ▽
          </span>
        </div>

        <AnimatePresence>
          {showItem && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <ItemList items={menuData.itemCards} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RestoCategory;
