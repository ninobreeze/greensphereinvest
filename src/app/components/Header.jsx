"use client";

import NavBar from "./NavBar";
import Menu from "./Menu";
import styles from "@/app/styles/Header.module.scss";
import { motion } from "framer-motion";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
	const [userEmail, setUserEmail] = useState("");
	const router = useRouter();

	function handleChange(e) {
		setUserEmail(e.target.value);
	}
	function handleSubmit() {
		localStorage.setItem("email", userEmail);
		router.push("/signup");
	}

	useEffect(function () {
		localStorage.clear();
	}, []);

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
								type="email"
								onChange={handleChange}
								// onChange={(e) => setUserEmail(e.target.value)}
								className={styles.HeaderEmail}
								placeholder="Enter your email address"
							/>

							<button
								onClick={handleSubmit}
								className={styles.HeaderEmailButton}
							>
								Sign Up
							</button>
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
