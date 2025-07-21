const Shimmer = ({ variant = "grid" }) => {
  /* ------- Card-Grid Skeleton (default) ------- */
  if (variant === "grid") {
    return (
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="flex flex-col h-full rounded-xl border border-gray-200 bg-white p-4 animate-pulse"
            >
              <div className="mb-4 h-40 w-full rounded-md bg-gray-200" />
              <div className="mb-2 h-4 w-3/4 rounded bg-gray-200" />
              <div className="mb-4 h-3 w-1/2 rounded bg-gray-200" />
              <div className="mt-auto h-3 w-1/3 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ------- Menu Skeleton ------- */
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10 py-8 animate-pulse">
      {/* Header */}
      <div className="mb-6">
        <div className="h-6 w-1/2 sm:w-1/3 rounded bg-gray-200 mb-2" />
        <div className="h-4 w-2/3 sm:w-1/2 rounded bg-gray-200" />
      </div>

      {/* Menu Items */}
      <ul className="space-y-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <li
            key={idx}
            className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border border-gray-200 bg-white p-4 gap-2"
          >
            <span className="h-4 w-full sm:w-2/3 rounded bg-gray-200" />
            <span className="h-4 w-20 sm:w-16 rounded bg-gray-200" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shimmer;
