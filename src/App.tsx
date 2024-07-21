import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import ListProducts from "./pages/list-products";
import AboutUs from "./pages/about-us";
import Details from "./pages/details";
import Login from "./pages/login";
import SearchProducts from "./pages/search-result";
import NotFound from "./pages/not-found";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/products",
      element: <ListProducts />,
    },
    {
      path: "/products/details",
      element: <Details />,
    },
    {
      path: "/products/search",
      element: <SearchProducts />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
