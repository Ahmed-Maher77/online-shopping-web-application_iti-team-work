import React from "react";
import { FaShippingFast, FaUser } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { TbLogin2, TbLogout2 } from "react-icons/tb";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({ search, setSearch, searchProduct }) {
	const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
	return (
		<>
			<div className="header">
				<div className="top_header">
					<div className="icon">
						<FaShippingFast />
					</div>
					<div className="info">
						<p>Free Shipping When Shopping up to $1000</p>
					</div>
				</div>
				<div className="mid_header">
					<section className="header-icons">
						<div className="logo">
							<img
								src="Image/logo.jpg"
								alt="logo"
								width="120px"
								height="35px"
							/>
						</div>
						{isAuthenticated ? (
							// Logout Button
							<div className="user">
								<div className="icon">
									<TbLogout2 />
								</div>
								<div className="btn">
									<button
										onClick={() =>
											logout({
												logoutParams: { returnTo: window.location.origin },
											})
										}
									>
										Logout
									</button>
								</div>
							</div>
						) : (
							// Login Button
							<div className="user">
								<div className="icon">
									<TbLogin2 />
								</div>
								<div className="btn">
									<button onClick={() => loginWithRedirect()}>Login</button>
								</div>
							</div>
						)}
					</section>
					<div className="search_box">
						<input
							type="text"
							value={search}
							placeholder="search"
							onChange={(e) => setSearch(e.target.value)}
						></input>
						<button onClick={searchProduct}>
							<IoSearchSharp />{" "}
						</button>
					</div>
				</div>
				<div className="last_header">
					<div className="user_profile">
						{
							// User Profile Will Shown Here
							isAuthenticated ? (
								<>
									<div className="icon">
										<FaUser />
									</div>
									<div className="info">
										<h2>{user.name}</h2>
										<p>{user.email}</p>
									</div>
								</>
							) : (
								<>
									<div className="icon">
										<FaUser />
									</div>
									<div className="info">
										<p>Please Login</p>
									</div>
								</>
							)
						}
					</div>
					<div className="nav">
						<ul>
							<li>
								<Link to="/" className="link">
									Home
								</Link>
							</li>
							<li>
								<Link to="/shop" className="link">
									Shop
								</Link>
							</li>
							<li>
								<Link to="/cart" className="link">
									Cart
								</Link>
							</li>{" "}
							<li>
								<Link to="/about" className="link">
									About
								</Link>
							</li>
							<li>
								<Link to="/contact" className="link">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className="offer">
						<p>flat 10% over all iphone</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Nav;
