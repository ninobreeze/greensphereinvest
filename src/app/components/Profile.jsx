"use client";

import styles from "@/app/styles/Profile.module.scss";
import { motion } from "framer-motion";

const MoveUp = {
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
		},
	},
};

function Profile() {
	return (
		<motion.div
			variants={MoveUp}
			initial="hidden"
			animate="visible"
			className={styles.Container2}
		>
			<div className={styles.Container2HeadingContainer}>
				<h2 className={styles.Container2Heading}>Profile</h2>
			</div>

			<div className={styles.ContainerBox}>
				<ul>
					<li>
						<p>Account Name</p>
						<input type="text" />
					</li>
					<li>
						<p>Registration Date</p>
						<p>Jan-11-2025 06:05:50 AM</p>
					</li>
					<li>
						<p>Your Full Name</p>
						<input type="text" />
					</li>
					<li>
						<p> New Password</p>
						<input type="text" />
					</li>
					<li>
						<p>Retype Password</p>
						<input type="text" />
					</li>
					<li>
						<p>Your Bank Wire Account Details</p>
						<input type="text" />
					</li>
					<li>
						<p> Your Bitcoin Wallet Address</p>
						<input type="text" />
					</li>
					<li>
						<p> Your Ethereum Wallet Address</p>
						<input type="text" />
					</li>
					<li>
						<p> Your Usdt Trc20 Wallet Address</p>
						<input type="text" />
					</li>
					<li>
						<p> Your Email Address</p>
						<input type="text" />
					</li>
				</ul>
				<div className={styles.ButtonContainer}>
					<button>Update</button>
				</div>
			</div>
		</motion.div>
	);
}

export default Profile;
