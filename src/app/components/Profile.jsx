"use client";

import styles from "@/app/styles/Profile.module.scss";
import { motion } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "@/app/dashboard/page";
import { useRouter } from "next/navigation";

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
	const { userDetails, setIsOpen } = useContext(UserContext);
	const router = useRouter();
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
						<input value={userDetails[0].username} type="text" />
					</li>
					<li>
						<p>Registration Date</p>
						<p>---</p>
					</li>
					<li>
						<p>Your Full Name</p>
						<input value={userDetails[0].fullname} type="text" />
					</li>
					<li>
						<p> New Password</p>
						<input type="password" />
					</li>
					<li>
						<p>Retype Password</p>
						<input type="password" />
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
						<input value={userDetails[0].email} type="text" />
					</li>
				</ul>
				<div className={styles.ButtonContainer}>
					<button onClick={() => setIsOpen("overview")}>Update</button>
				</div>
			</div>
		</motion.div>
	);
}

export default Profile;
