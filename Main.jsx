import React, { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Cart from "./src/components/Cart";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";

// import "./index.css";

const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <main className="pt-16">
          <Outlet />
        </main>
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/Swiggy-FrontEnd/",
    element: <AppLayout />,
    children: [
      { path: "/Swiggy-FrontEnd/", element: <Body /> },
      { path: "/Swiggy-FrontEnd/about", element: <About /> },
      { path: "/Swiggy-FrontEnd/contact", element: <Contact /> },
      {
        path: "/Swiggy-FrontEnd/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      { path: "/Swiggy-FrontEnd/grocery", element: <Grocery /> },
      { path: "/Swiggy-FrontEnd/cart", element: <Cart /> },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
