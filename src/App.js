import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Components/Nav";
import Rout from "./Components/Rout";
import Footer from "./Components/Footer";
import Data from "./Components/Data";

function App() {
  // Add To cart
  const [cart, setCart] = useState([]);
  //Shop Page product
  const [shop, setShop] = useState(Data);
  //Shop Search Filter
  const [search, setSearch] = useState('');
  // Shop category filter
  const Filter = (x) =>
  {
    const categoryFilter = Data.filter((product) => 
    {
      return product.category === x 
    })
    setShop(categoryFilter)
  }
  const allCategoryFilter = () =>
  {
    setShop(Data)
  }
  //Shop Search Filter
  const searchLength = (search || []).length === 0
  const searchProduct = () =>
  {
  if(searchLength)
  {
    alert("please write name of category")
    setShop(Data)
  }
  else
  {
    const searchFilter = Data.filter((x) => 
    {
      return x.category === search
    })
      setShop(searchFilter)
  }
}
  //Add To cart
  const addToCart = (product) =>
  {
    const exist = cart.find((x) => {
      return x.id === product.id
    })
    if(exist)
    {
      alert("This product is allready added in cart")
    }
    else
    {
      setCart([...cart, {...product, quantity:1}])
      alert("Added To cart")
    }
  }
  return(
    <>
      <BrowserRouter>
        <Nav search={search} setSearch={setSearch} searchProduct={searchProduct} />
        <Rout shop={shop} Filter={Filter} allCategoryFilter={allCategoryFilter} cart={cart} setCart={setCart} addToCart={addToCart}/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;