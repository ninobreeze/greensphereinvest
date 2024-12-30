"use client";
import styles from "@/app/styles/Menu.module.scss";
import Image from "next/image";
import { delay, motion } from "framer-motion";
import { myContext } from "./Header";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const MenuVariant = {
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
			delay: 0.2,
		},
	},
};

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

const MoveDown = {
	hidden: {
		opacity: 0,
		y: -50,
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
function Page() {
	const { isOpen, setIsOpen } = useContext(myContext);
	const router = useRouter()
	return (
		<motion.div
			variants={MoveDown}
			initial="hidden"
			animate="visible"
			className={styles.Menu}
		>
			<div>
				<Image
					alt="close"
					src={"/circle-xmark-solid.svg"}
					width={35}
					height={35}
					onClick={(e) => setIsOpen(!isOpen)}
				/>
			</div>
			<motion.ul
				variants={MenuVariant}
				initial="hidden"
				animate="visible"
				className={styles.MenuItems}
			>
				<li>Home</li>
				<li>Bounty</li>
				<li>Terms</li>
				<li>FAQ</li>
				<li>Support</li>
			</motion.ul>

			<motion.div
				variants={MoveUp}
				initial="hidden"
				animate="visible"
				className={styles.MenuButtonContainer}
			>
				<h3
					onClick={(e) => router.push("/login")}
					className={styles.MenuButtonLogin}
				>
					Log in
				</h3>
				<h3
					onClick={(e) => router.push("/signup")}
					className={styles.MenuButtonSignup}
				>
					Sign Up
				</h3>
			</motion.div>
		</motion.div>
	);
}

export default Page;
