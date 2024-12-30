"use client";

import NavBar from "./NavBar";
import Menu from "./Menu";
import styles from "@/app/styles/Header.module.scss";
import { motion } from "framer-motion";
import { createContext, useState } from "react";

export const myContext = createContext();

const HeaderComponentVariant = {
	hidden: {
		opacity: 0,
		y: 50,
	},

	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.76, 0, 0.24, 1],
			delay: 0.3,
		},
	},
};

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	

	return (
		<div className={styles.Header}>
			<myContext.Provider value={{ isOpen, setIsOpen }}>
				{!isOpen && <NavBar />}
				{isOpen && <Menu />}
				<motion.div
					variants={HeaderComponentVariant}
					initial="hidden"
					animate="visible"
					className={styles.HeaderComponent}
				>
					<div className={styles.HeaderTextBox}>
						<h1 className={styles.HeaderHeading}>
							AI-Powered Crypto Investments
						</h1>
						<p className={styles.HeaderParagraph}>
							Invest in crypto securely and maximize your potential with
							CryptoSphere.com. Sign up today for AI-powered trading and smart
							solutions.
						</p>
						<div className={styles.HeaderEmailContainer}>
							<input
								className={styles.HeaderEmail}
								type="text"
								placeholder="Enter your email address"
							/>
							
							<button className={styles.HeaderEmailButton}>Sign Up</button>
						</div>
					</div>
					<div className={styles.HeaderVideoContainer}>
						<video autoPlay muted loop>
							<source src="/HeaderVideo.mp4" type="video/mp4" />
						</video>
					</div>
				</motion.div>
			</myContext.Provider>
		</div>
	);
}

export default Header;
