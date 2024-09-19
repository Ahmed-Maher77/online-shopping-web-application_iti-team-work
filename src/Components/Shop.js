import React, { useState } from "react";
import "./Shop.css";
import { AiFillHeart, AiFillEye, AiOutlineClose } from "react-icons/ai";

function Shop({ shop, Filter, allCategoryFilter, addToCart }) {
	// Toggle Product Detail
	const [showDetail, setShowDetail] = useState(false);
	// Detail Page Data
	const [detail, setDetail] = useState([]);
	// Showing Detail Box
	const detailPage = (product) => {
		const detailData = [{ product }];
		const productDetail = detailData[0]["product"];
		setDetail(productDetail);
		setShowDetail(true);
	};
	const closedDetail = () => {
		setShowDetail(false);
	};
	return (
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
			<div className="shop">
				<h2>shop</h2>
				<p>Home . shop</p>
				<div className="container">
					<div className="left_box">
						<div className="category">
							<div className="header">
								<h3>all categories</h3>
							</div>
							<div className="box">
								<ul>
									<li onClick={() => allCategoryFilter()}>All</li>
									<li onClick={() => Filter("fashion")}>fashion</li>
									<li onClick={() => Filter("phone")}>phone</li>
									<li onClick={() => Filter("watch")}>watch</li>
									<li onClick={() => Filter("laptop")}>laptop</li>
									<li onClick={() => Filter("electronics")}>electronics</li>
									<li onClick={() => Filter("headphone")}>headphone</li>
									<li onClick={() => Filter("toys")}>toys</li>
								</ul>
							</div>
						</div>
						{/* <div className='banner'>
                            <div className='img_box'>
                                
                            </div>
                        </div> */}
					</div>
					<div className="right_box">
						<div className="banner">
							<div className="img_box">
								<img src="Image/shop_top.webp" alt=""></img>
								<img src="Image/shop_left.avif" alt=""></img>
							</div>
						</div>
						<div className="product_box">
							<h2>Shop Product</h2>
							<div className="product_container">
								{shop.map((currentProduct, i) => {
									return (
										<div className="box" key={i}>
											<div className="img_box">
												<img src={currentProduct.image} alt=""></img>
												<div className="icon">
													<li>
														<AiFillHeart />
													</li>
													<li onClick={() => detailPage(currentProduct)}>
														<AiFillEye />
													</li>
												</div>
											</div>
											<div className="detail">
												<h3>{currentProduct.Name}</h3>
												<p>$ {currentProduct.price}</p>
												<button onClick={() => addToCart(currentProduct)}>
													Add To Cart
												</button>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Shop;
