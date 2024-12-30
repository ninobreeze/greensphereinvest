"use client";

import styles from "@/app/styles/NavBar.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { myContext } from "@/app/components/Header";
import { useRouter } from "next/navigation";

const MoveUp = {
	hidden: {
		opacity: 0,
		y: -100,
	},

	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.76, 0, 0.24, 1],
		},
	},
};

function NavBar() {
	const { isOpen, setIsOpen } = useContext(myContext);
	const router = useRouter();
	return (
		<div style={{ overflow: "hidden" }} className={styles.NavBar}>
			<motion.div
				variants={MoveUp}
				initial="hidden"
				animate="visible"
				className={styles.NavBarLogoContainer}
			>
				<Image
					src={"/coins-solid.svg"}
					width={25}
					height={25}
					alt="coins-logo"
				/>
				<h1 className={styles.NavBarLogo}>CRYPTOSPHERE</h1>
			</motion.div>
			<div className={styles.NavBarNavigation}>
				<motion.ul
					variants={MoveUp}
					initial="hidden"
					animate="visible"
					className={styles.NavBarLinks}
				>
					<li className={styles.NavBarLinksItem}>Home</li>
					<li className={styles.NavBarLinksItem}>Bounty</li>
					<li className={styles.NavBarLinksItem}>Terms</li>
					<li className={styles.NavBarLinksItem}>FAQ</li>
					<li className={styles.NavBarLinksItem}>Support</li>
				</motion.ul>
			</div>
			<motion.div
				variants={MoveUp}
				initial="hidden"
				animate="visible"
				className={styles.NavBarButtonContainer}
			>
				<h3
					onClick={(e) => router.push("/login")}
					className={styles.NavBarButtonLogin}
				>
					Log in
				</h3>
				<h3
					onClick={(e) => router.push("/signup")}
					className={styles.NavBarButtonSignup}
				>
					Sign Up
				</h3>
			</motion.div>
			<div className={styles.NavBarMenu}>
				<Image
					src={"/bars-solid.svg"}
					width={25}
					height={25}
					alt="menu"
					onClick={(e) => setIsOpen(!isOpen)}
				/>
			</div>
		</div>
	);
}

export default NavBar;
