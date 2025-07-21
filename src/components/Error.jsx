import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 mb-4">
          Oops!!!
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-2">
          Something went wrong 😓
        </p>
        <p className="text-sm sm:text-md text-gray-500">
          {err?.status} — {err?.statusText || "Unexpected Error"}
        </p>
      </div>
    </main>
  );
};

export default Error;
