import ProductItem from "./ProductItem";

const RAW_DATA = [
  { id: "1", name: "Banana", price: 12 },
  { id: "2", name: "Banana2", price: 24 },
  { id: "3", name: "Banana3", price: 55 },
  { id: "4", name: "Banana4", price: 11 },
];

function ProductList() {
    const productList = RAW_DATA.map(item=><ProductItem key={item.id} id={item.id} name={item.name} price={item.price}/>)
  return (
    <section>
      <h1>Choose your product here</h1>
      <ul>
        {productList}
      </ul>
    </section>
  );
}

export default ProductList;
