import ProductItem from "./ProductItem";
// Create ProductList Component
function ProductList({productList}) {
    // Creating an Array of Product Items to be Rendered
    const listOfProducts = productList.map(product =>
        <ProductItem product={product} key={product.id}/>
    );
    // Reder Product Items
    return (
    <>
        <ul>{listOfProducts}</ul>
    </>
  );
}

export default ProductList;