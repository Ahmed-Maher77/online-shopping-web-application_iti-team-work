import React from "react";
import './Cart.css';
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

function Cart({cart, setCart}) {
    // Increase Quantity of cart product
    const incQuantity = (product) => 
    {
        const exist = cart.find((x) => 
        {
            return x.id === product.id
        })
        setCart(cart.map((currentProduct) => 
        {
            return currentProduct.id === product.id ? {...exist, quantity: exist.quantity + 1} : currentProduct
        }))
    }
    // decrease Quantity of cart product
    const decQuantity = (product) => 
    {
        const exist = cart.find((x) => 
        {
            return x.id === product.id
        })
        setCart(cart.map((currentProduct) => 
        {
            return currentProduct.id === product.id ? {...exist ,quantity: exist.quantity - 1}: currentProduct
        }))
    }

    //Removing cart product
    const removeProduct = (product) => 
    {
        const exist = cart.find((x) => 
        {
            return x.id === product.id
        })
        if(exist.quantity > 0)
        {
            setCart(cart.filter((currentProduct) => 
            {
            return currentProduct.id !== product.id
            }))
        }
    }
    //Total Price
    const total = cart.reduce((price, item) => 
        price + item.quantity * item.price, 0)
    return(
        <>
        <div className='cart'>
            <h3>cart</h3>
            {
                cart.length === 0 && 
                <>
                <div className='empty_cart'>
                    <h2>Your Shopping cart is empty</h2>
                    <Link to='/shop'><button>Shop Now</button></Link>
                </div>
                </>
            }
            <div className='container'>
                {
                    cart.map((currentProduct) => 
                    {
                    return(
                        <>
                        <div className='box'>
                            <div className='img_box'>
                                <img src={currentProduct.image} alt=''></img>
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                    <h4>{currentProduct.category}</h4>
                                    <h3>{currentProduct.Name}</h3>
                                    <p>Price: ${currentProduct.price}</p>
                                    <p>Total: ${currentProduct.price * currentProduct.quantity}</p>
                                </div>
                                <div className='quantity'>
                                    <button onClick={() => incQuantity(currentProduct)}>+</button>
                                        <input type='number' value={currentProduct.quantity}></input>
                                        <button onClick={() => decQuantity(currentProduct)}>-</button>
                                </div>
                                <div className='icon'>
                                    <li onClick={() => removeProduct(currentProduct)}><AiOutlineClose /></li>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                    })
                }
            </div>
            <div className='bottom'>
                {
                    cart.length > 0 && 
                    <>
                    <div className='Total'>
                        <h4>Sub Total: ${total}</h4>
                    </div>
                    <button>checkout</button>
                    </>
                }
            </div>
        </div>
        </>
    );
};

export default Cart;