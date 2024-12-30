"use client";

import { motion } from "framer-motion";
import styles from "@/app/styles/Login.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MoveDown = {
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

const MoveUp = {
	hidden: {
		opacity: 0,
		y: 100,
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

function page() {
	const router = useRouter();
	return (
		<div className={styles.Login}>
			<nav className={styles.NavBar}>
				<motion.div
					onClick={(e) => router.push("/")}
					variants={MoveDown}
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
			</nav>
			<motion.div
				variants={MoveUp}
				initial="hidden"
				animate="visible"
				className={styles.Container}
			>
				<h1 className={styles.Heading}>Log In</h1>
				<form className={styles.Form} action="">
					<div className={styles.FormItem}>
						<label className={styles.FormLabel} htmlFor="">
							Email
						</label>
						<input className={styles.FormInput} type="text" />
					</div>

					<div className={styles.FormItem}>
						<label className={styles.FormLabel} htmlFor="">
							Password
						</label>
						<input className={styles.FormInput} type="text" />
					</div>
					<div className={styles.FormButtonContainer}>
						<button className={styles.FormButton}>Log In</button>
					</div>
					<div className={styles.FormAlreadyContainer}>
						<p className={styles.FormAlreadyText}>
							Don't have an account?{" "}
							<span onClick={(e) => router.push("/signup")}>Get Started</span>
						</p>
					</div>
				</form>
			</motion.div>
		</div>
	);
}

export default page;
