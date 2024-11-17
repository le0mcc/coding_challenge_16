function AddProductForm({addItem}) {
    function getAddItem(submitEvent) {
        const formData = new FormData(submitEvent.target);
        submitEvent.preventDefault();
        const newName = formData.get("newName");
        const newPrice = formData.get("newPrice");
        const newDescription = formData.get("newDescription");
        addItem(newName, newPrice, newDescription)
    }
    return(
        <>
            <form onSubmit={getAddItem}>
                <h3>Input Name</h3>
                <input name="newName"/>
                <h3>Input Price</h3>
                <input name="newPrice"/>
                <h3>Input Description</h3>
                <input name="newDescription"/>
                <br />
                <br />
                <button type="submit">Submit Product</button>
            </form>
        </>
    )
}

export default AddProductForm