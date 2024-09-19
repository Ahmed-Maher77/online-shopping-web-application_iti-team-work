import React, { useEffect, useState } from "react";
import './Home.css';
import { Link } from "react-router-dom";
import Data from "./Data";
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHeart, AiFillEye, AiOutlineClose } from "react-icons/ai";

function Home({addToCart}) {
    // Toggle Product Detail
	const [showDetail, setShowDetail] = useState(false);
	// Detail Page Data
	const [detail, setDetail] = useState([]);
	
	// Product category
    const [newProduct, setNewProduct] =  useState([]);
    const [featuredProduct, setFeaturedProduct] =  useState([]);
    const [topProduct, setTopProduct] =  useState([]);
    // Tranding Product
    const [trendingProduct, setTrendingProduct] = useState(Data);
    // Filter of tranding product
    const filterCategory = (x) => 
        {
            const filterProduct = Data.filter((currentProduct) => 
            {
                return currentProduct.type === x
            })
            setTrendingProduct(filterProduct)
        }
    //All Trending Product
    const allTrendingProduct = () =>
    {
        setTrendingProduct(Data)
    }
    //Product Type
    useEffect(() => 
    {
        productCategory()
    }, [])
    const productCategory = () => 
    {
        // New Product
        const newCategory = Data.filter((x) => 
        {
            return x.type === 'new'
        })
        setNewProduct(newCategory)
        // Featured Product
        const featuredCategory = Data.filter((x) => 
        {
            return x.type === 'featured'
        })
        setFeaturedProduct(featuredCategory)
        // Top Product
        const topCategory = Data.filter((x) => 
        {
            return x.type === 'top'
        })
        setTopProduct(topCategory)
    }

	
	// Showing Detail Box
	const detailPage = (product) => {
		setDetail(product);  // Directly set the product
		setShowDetail(true); // Show the detail box
		
	};
	const closedDetail = () => {
		setShowDetail(false);
	};


    return(
        <>
		{showDetail ? (
				<>
					<div className="product_detail">
						<button className="close_btn" onClick={closedDetail}>
							<AiOutlineClose />
						</button>
						<div className="container">
							<div className="img_box">
								<img src={detail.image} alt=""></img>
							</div>
							<div className="info">
								<h4>{detail.category}</h4>
								<h2>{detail.Name}</h2>
								<p>
									A Screen Everyone Will Love: Whether your family is streaming
									or video chatting with friends tablet A8...
								</p>
								<h3>${detail.price}</h3>
								<button onClick={() => addToCart(detail)}>Add To Cart</button>
							</div>
						</div>
					</div>
				</>
			) : null}
        <div className="home">
            <div className='top_banner'>
                <div className='contant'>
                    <h3>silver aluminum</h3>
                    <h2>Apple Watch</h2>
                    <p>30% off at your first odder</p>
                    <Link to='/shop' className='link'>Shop Now</Link>
                </div>
            </div>
            <div className='trending'>
                <div className='container'>
                    <div className='left_box'>
                        <div className='header'>
                            <div className='heading'>
                                <h2 onClick={() => allTrendingProduct ()}>trending product</h2>
                            </div>
                            <div className='cate'>
                                <h3 onClick={() => filterCategory ('new')}>New</h3>
                                <h3 onClick={() => filterCategory ('featured')}>Featured</h3>
                                <h3 onClick={() => filterCategory ('top')}>top selling</h3>
                            </div>
                        </div>
                        <div className='products'>
                            <div className='container'>
                                {
                                    trendingProduct.map((currentProduct, i) => 
                                    {
                                    return(
                                        <div className='box' key={i}>
                                            <div className='img_box'>
                                                <img src={currentProduct.image} alt=''></img>
                                                <div className='icon'>
                                                    <div className='icon_box' onClick={() => detailPage(currentProduct)}>
													<AiFillEye />
                                                    </div>    
                                                    <div className='icon_box'>
													<AiFillHeart />
                                                    </div>                        
                                                </div>
                                            </div>
                                            <div className='info'>
                                                <h3>{currentProduct.Name}</h3>
                                                <p>${currentProduct.price}</p>
                                                <button className='btn' onClick={() => addToCart(currentProduct)}>Add to cart</button>
                                            </div>
                                        </div>
                                    )
                                    })
                                }
                            </div>
                            <button>Show More</button>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='right_container'>
                            <div className='testimonial'>
                                <div className='head'>
                                    <h3>our testimonial</h3>
                                </div>
                                <div className='detail'>
                                    <div className='img_box'>
                                        <img src='Image/T1.avif' alt='testimonial'></img>
                                    </div>
                                    <div className='info'>
                                        <h3>stephan robot</h3>
                                        <h4>web designer</h4>
                                        <p>Duis faucibus enim vitae nunc molestie, nec facilisis arcu pulvinar nullam mattisr nullam mattis.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='newsletter'>
                                <div className='head'>
                                    <h3>newsletter</h3>
                                </div>
                                <div className='form'>
                                    <p>join our mailing list</p>
                                    <input type='email' placeholder='E-mail' autoComplete='off'></input>
                                    <button>subscribe</button>
                                    <div className='icon_box'>
                                        <div className='icon'>
                                            <FaFacebookF />
                                        </div>
                                        <div className='icon'>
                                            <FaTwitter />
                                        </div>
                                        <div className='icon'>
                                            <FaInstagram />
                                        </div>
                                        <div className='icon'>
                                            <FaYoutube />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='banners'>
                <div className='container'>
                    <div className='left_box'>
                        <div className='box'>
                            <img src='Image/Multi-Banner-1.avif' alt='banner'></img>
                        </div>
                        <div className='box'>
                            <img src='Image/Multi-Banner-2.avif' alt='banner'></img>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='top'>
                            <img src='Image/Multi-Banner-3.webp' alt=''></img>
                            <img src='Image/Multi-Banner-4.avif' alt=''></img>
                        </div>
                        <div className='bottom'>
                            <img src='Image/Multi-Banner-5.webp' alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='product_type'>
                <div className='container'>
                    <div className='box'>
                        <div className='header'>
                            <h2>New Product</h2>
                        </div>
                        {
                            newProduct.map((currentProduct, i) => 
                            {
                            return(
                                <div className='productbox' key={i}>
                                    <div className='img-box'>
                                        <img src={currentProduct.image} alt=''></img>
                                    </div>
                                    <div className='detail'>
                                        <h3>{currentProduct.Name}</h3>
                                        <p>$ {currentProduct.price}</p>
                                        <div className='icon'>
											<button onClick={() => detailPage(currentProduct)}><AiFillEye /></button>
                                            <button><AiFillHeart /></button>
                                            <button onClick={() => addToCart(currentProduct)}><FaShoppingCart /></button>      
                                        </div>
                                    </div>
                                </div>
                            )})
                        }
                    </div>
                    <div className='box'>
                        <div className='header'>
                            <h2>Featured Product</h2>
                        </div>
                        {
                            featuredProduct.map((currentProduct, i) => 
                            {
                            return(
                                <div className='productbox' key={i}>
                                    <div className='img-box'>
                                        <img src={currentProduct.image} alt=''></img>
                                    </div>
                                    <div className='detail'>
                                        <h3>{currentProduct.Name}</h3>
                                        <p>$ {currentProduct.price}</p>
                                        <div className='icon'>
                                            <button onClick={() => detailPage(currentProduct)}><AiFillEye /></button>
                                            <button><AiFillHeart /></button>
                                            <button onClick={() => addToCart(currentProduct)}><FaShoppingCart /></button>                                                </div>
                                    </div>
                                </div>
                            )})
                        }
                    </div>
                    <div className='box'>
                        <div className='header'>
                            <h2>Top Product</h2>
                        </div>
                        {
                            topProduct.map((currentProduct, i) => {
                                return(
                                    <div className='productbox' key={i}>
                                        <div className='img-box'>
                                            <img src={currentProduct.image} alt=''></img>
                                        </div>
                                        <div className='detail'>
                                            <h3>{currentProduct.Name}</h3>
                                            <p>$ {currentProduct.price}</p>
                                            <div className='icon'>
                                                <button onClick={() => detailPage(currentProduct)}><AiFillEye /></button>
                                                <button><AiFillEye /></button>
                                                <button onClick={() => addToCart(currentProduct)}><FaShoppingCart /></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Home;