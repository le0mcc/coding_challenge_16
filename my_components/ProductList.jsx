import ProductItem from "./ProductItem";
// Create ProductList Component
function ProductList({productList}) {
    // Creating an Array of Product Items to be Rendered
    // Use Unique Keys from ID to Keep Track of Elements
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