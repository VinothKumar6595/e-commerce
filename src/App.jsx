import CartProvider from "./Store/CartProvider";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { Routes, Navigate, Route } from "react-router-dom";
import About from "./components/about";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import { useContext } from "react";
import CartContext from "./Store/Cart-Context";
import NotFound from "./components/NotFound";
// const router = createBrowserRouter([
//   { path: "/", element: <Navigate to="/Home" /> },
//   {
//     path: "/store",
//     element: (
//       <CartProvider>
//         <div className="bg-gray-200">
//           <Header />
//           <ProductsList />
//         </div>
//       </CartProvider>
//     ),
//   },

//   {
//     path: "/about",
//     element: <About />,
//   },
//   { path: "/Home", element: <Home /> },
//   { path: "/contactUs", element: <ContactUs /> },
//   {
//     path: "/product-details/:productName",
//     element: <ProductDetails />,
//   },
//   { path: "/auth", element: <Login /> },
// ]);
function App() {
  const ctx = useContext(CartContext);
  const loggedIn = ctx.isLoggedIn;
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      {loggedIn && (
        <Route
          path="/store"
          element={
            <div className="bg-gray-200">
              <Header />
              <ProductsList />
            </div>
          }
        />
      )}
      <Route path="/about" element={<About />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/contactUs" element={<ContactUs />} />
      {loggedIn && (
        <Route
          path="/product-details/:productName"
          element={<ProductDetails />}
        />
      )}
      <Route path="/auth" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
