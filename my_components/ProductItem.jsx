// Define ProductItem Component and Use Product Data
function ProductItem({product}) {
    return (
        <>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
        </>
    )
}

export default ProductItem