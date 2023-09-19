import CartProvider from "./Store/CartProvider";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import About from "./components/about";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import ProductDetails from "./components/ProductDetails";
import Reviews from "./components/Reviews";
const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/Home" /> },
  {
    path: "/store",
    element: (
      <CartProvider>
        <div className="bg-gray-200">
          <Header />
          <ProductsList />
        </div>
      </CartProvider>
    ),
  },

  {
    path: "/about",
    element: <About />,
  },
  { path: "/Home", element: <Home /> },
  { path: "/contactUs", element: <ContactUs /> },
  {
    path: "/product-details/:productName",
    element: <ProductDetails />,
    children: [{ path: "reviews", element: <Reviews /> }],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
