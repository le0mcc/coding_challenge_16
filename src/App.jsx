// Task 2: Create the App Component
// Importing componenets
import { useState } from 'react'
import './App.css'
import ProductList from '../my_components/ProductList';
import AddProductForm from '../my_components/AddProductForm';

// Create App Component as Main Body
function App() {
  // Define a Default List of Products as an Array of Objects
  let initialProducts = [
    {id: 1, name: "T-Shirt", price: 15, description: "White T Shirt with 3 Spotted Whale Sharks"},
    {id: 2, name: "Sweatshirt", price: 35, description: "Black Sweatshirt with Sperm Whale"},
    {id: 3, name: "Sweatpants", price: 20, description: "Gray Sweatpants with Small Hammerhead on Right Pant Leg"}
  ];
  // Keep Track of ID
  let nextId = 4; // This is Important Because Keys Must be Unique
  // Initialize State for Products
  const [productList, setProducts] = useState(initialProducts)
  // Adding Item from the Form
  function addItem(newName, newPrice, newDescription) {
    // Create New Array with Elements from Previous State and Add New Product
    setProducts([
      ...productList, {id: nextId++, name: newName, price: newPrice, description: newDescription}
    ])
  };
  // Return JSX to Render Product List and Form
  // Pass productList and addItem as Props
  return (
    <>
      <ProductList productList={productList}/>
      <AddProductForm addItem={addItem}/>
    </>
  )
}

export default App
