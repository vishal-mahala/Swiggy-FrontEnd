import User from "./User";

const About = () => {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Heading */}
      <section className="mb-6 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">About</h1>
        <p className="mt-1 text-sm sm:text-base text-gray-500">
          This is an About Us page
        </p>
      </section>

      {/* User Card */}
      <div className="flex justify-center sm:justify-start">
        <User />
      </div>
    </main>
  );
};

export default About;
