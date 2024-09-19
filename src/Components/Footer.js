import React from "react";
import "./Footer.css";
import {
	FaPiggyBank,
	FaShippingFast,
	FaHeadphonesAlt,
	FaWallet,
} from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<div className="footer">
				<div className="container">
					<div className="left-box">
						<div className="box">
							<div className="icon_box">
								<FaPiggyBank />
							</div>
							<div className="detail">
								<h3>Great Saving</h3>
								<p>
									provides a seamless shopping experience, featuring discounts,
									flash sales, and personalized recommendations
								</p>
							</div>
						</div>
						<div className="box">
							<div className="icon_box">
								<FaShippingFast />
							</div>
							<div className="detail">
								<h3>Free Delivery</h3>
								<p>
									It enhances customer satisfaction, reduces cart abandonment,
									and boosts sales
								</p>
							</div>
						</div>
						<div className="box">
							<div className="icon_box">
								<FaHeadphonesAlt />
							</div>
							<div className="detail">
								<h3>24 Hours Support</h3>
								<p>
									it's resolving issues, answering product inquiries, or
									providing technical help, our dedicated team is always
									available to enhance your shopping experience
								</p>
							</div>
						</div>
						<div className="box">
							<div className="icon_box">
								<FaWallet />
							</div>
							<div className="detail">
								<h3>Money Back</h3>
								<p>
									streamlines the refund process by enabling quick submissions
									of refund requests with detailed explanations and supporting
									documents
								</p>
							</div>
						</div>
					</div>
					<div className="right_box">
						<div className="header">
							<img src="Image/logo.jpg" alt="" width="400px" height="150px" />
							<p>
								It features categories, product details, a shopping cart, and
								secure checkout processes. The app also supports customer
								accounts, reviews, and payment options, providing a seamless
								shopping experience.
							</p>
						</div>
						<div className="bottom">
							<div className="box">
								<h3>Your Account</h3>
								<ul>
									<li>About us</li>
									<li>Account</li>
									<li>Payment</li>
									<li>sales</li>
								</ul>
							</div>
							<div className="box">
								<h3>products</h3>
								<ul>
									<li>Delivery</li>
									<li>Track Oder</li>
									<li>New product</li>
									<li>old product</li>
								</ul>
							</div>
							<div className="box">
								<h3>contact us</h3>
								<ul>
									<li>4005, Silver Business PointIndia</li>
									<li>+44 7883318216</li>
									<li>info@gmail.com</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
