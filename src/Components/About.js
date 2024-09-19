import React from "react";
import './About.css';
import { Link } from "react-router-dom";

function About() {
    return(
        <>
        <div className="about-container">
            <section className="about-hero">
                <h1>About Our Online Shopping</h1>
                <p>Your one-stop destination for all your shopping needs.</p>
            </section>

            <section className="about-mission">
                <h2>Our Mission</h2>
                <p>
                At ONLINE SHOPPING, our mission is to provide high-quality products
                at affordable prices, while delivering exceptional customer service. We
                strive to create an excellent shopping experience for our customers.
                </p>
            </section>

            <section className="about-team">
                <h2>Meet Our Team</h2>
                <div className="team-grid">
                <div className="team-member">
                    <img src="Image/T1.avif" alt="Team Member 1" />
                    <h3>stephan robot</h3>
                    <p>CEO & Founder</p>
                </div>
                <div className="team-member">
                    <img src="Image/T1.avif" alt="Team Member 2" />
                    <h3>stephan robot</h3>
                    <p>Chief Marketing Officer</p>
                </div>
                <div className="team-member">
                    <img src="Image/T1.avif" alt="Team Member 3" />
                    <h3>stephan robot</h3>
                    <p>Lead Developer</p>
                </div>
                </div>
            </section>

            <div className="sections">
            <section className="about-values">
                <h2>Our Values</h2>
                <ul>
                <li>Customer-Centric Approach</li>
                <li>Integrity & Transparency</li>
                <li>Innovation & Excellence</li>
                <li>Customer Satisfaction</li>
                </ul>
            </section>

            <section className="about-history">
                <h2>Our History</h2>
                <p>
                Since our founding in 2002, we've been committed to delivering
                the best products and services. Over the years, we've expanded our
                product offerings, and our loyal customers have been at the heart of
                everything we do.
                </p>
            </section>
            </div>

            <section className="about-contact">
                <h2>Get in Touch</h2>
                <p>
                Have questions or feedback? Feel free to <Link to='/contact'>contact us</Link>.
                </p>
            </section>
        </div>
        </>
    );
}

export default About;
