import ProductItem from "./ProductItem";
// Task 3: Create ProductList Component
function ProductList({productList}) {
    // Creating an Array of Product Items to be Rendered
    // Task 5: Implement Keys in the ProductList Component
    const listOfProducts = productList.map(product =>
        <ProductItem product={product} key={product.id}/>
    );
    // Render Product Items
    return (
    <>
        <ul>{listOfProducts}</ul>
    </>
  );
}

export default ProductList;