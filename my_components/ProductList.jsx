import ProductItem from "./ProductItem";

function ProductList({productList}) {
    const listOfProducts = productList.map(product =>
        <ProductItem product={product} key={product.id}/>
    );
    return (
    <>
        <ul>{listOfProducts}</ul>
    </>
  );
}

export default ProductList;
