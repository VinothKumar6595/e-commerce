import CartProvider from "./Store/CartProvider";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/about";
import Home from "./components/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartProvider>
        <Header />
        <ProductsList />
      </CartProvider>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <About />
      </div>
    ),
  },
  { path: "/Home", element: <Home /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
