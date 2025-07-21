const User = () => {
  return (
    <div className="mx-auto my-8 max-w-md rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Name: <span className="font-normal">Vishal Mahala</span>
      </h2>
      <h3 className="text-md font-medium text-gray-700 mb-1">
        Location: <span className="font-normal">Jaipur</span>
      </h3>
      <h4 className="text-sm text-gray-600">
        Contact: <span className="text-indigo-600">@vishal_mahala24</span>
      </h4>
    </div>
  );
};

export default User;
