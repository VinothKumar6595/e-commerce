import CartProvider from "./Store/CartProvider";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <ProductsList />
      </CartProvider>
    </>
  );
}

export default App;
