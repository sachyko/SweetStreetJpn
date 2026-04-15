import React from "react";
import { Link } from "react-router-dom";

import logo from "./sweettstreetlogo.jpg";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<img src={logo} alt="logo" />
			<div className={styles.group}>
				<ul className={styles.footbarlinks}>
					<h3>Helpful Links</h3>
					<li>
						<Link to="/#home">Home</Link>
					</li>
					<li>
						<Link to="/#selection">Cookie Creations</Link>
					</li>
					<li>
						<Link to="/#order">Buy Now</Link>
					</li>
					<li>
						<Link to="/#contact">Contact Us</Link>
					</li>
				</ul>
				<div className={styles.socialMedia}>
					<h3>Stay Connected</h3>
					<li>
						<i className="fa-solid fa-envelope-circle-check"></i>
						SweetStreetjpn@gmail.com
					</li>
					<li>
						<i className="fa-solid fa-phone"></i>+8170-1428-1515
					</li>

					<li>
						<a
							href="https://www.facebook.com/profile.php?id=61573416684441"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fa-brands fa-facebook"></i>
							Sweet Street
						</a>
					</li>

					<li>
						<a
							href="https://www.instagram.com/sweetstreetjpn/?hl=en"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fa-brands fa-instagram"></i>
							SweetStreetjpn
						</a>
					</li>
				</div>
				<div className={styles.tagline}>
					<p>"Sweetness in every bite—crafted with care, baked with heart."</p>
					<span>@ 2025 Sweet Streets All rights reserved</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
