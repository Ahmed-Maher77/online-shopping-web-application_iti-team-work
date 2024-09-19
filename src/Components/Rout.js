import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import About from "./About";
import Contact from "./Contact";


function Rout({shop, Filter, allCategoryFilter, addToCart, cart, setCart}) {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home addToCart={addToCart}/>}/>
                <Route path="/shop" element={<Shop shop={shop} Filter={Filter} allCategoryFilter={allCategoryFilter} addToCart={addToCart} />}/>
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </>
    );
}

export default Rout;