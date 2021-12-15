import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import ProductList from "./components/Product/ProductList";

function App() {
  return <>
    <Layout>
      {false &&<Cart/>}
      <ProductList />
    </Layout>
  </>
}

export default App;
