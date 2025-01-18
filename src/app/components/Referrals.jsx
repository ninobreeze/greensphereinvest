"use client";

import styles from "@/app/styles/Referrals.module.scss";
import { motion } from "framer-motion";
import { useContext } from "react";
import { UserContext } from "../dashboard/page";

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

function Referrals() {
	const { userDetails } = useContext(UserContext);
	return (
		<motion.div
			variants={MoveUp}
			initial="hidden"
			animate="visible"
			className={styles.Container2}
		>
			<div className={styles.Container2HeadingContainer}>
				<h2 className={styles.Container2Heading}>Referral</h2>
			</div>

			<div className={styles.ContainerBox}>
				<ul>
					<li>
						<p>Referrals</p>
						<p>0</p>
					</li>
					<li>
						<p>Active Referrals</p>
						<p>0</p>
					</li>
					<li>
						<p>Total Commission</p>
						<p>$0.00</p>
					</li>
					<li>
						<p>Upline</p>
					</li>
					<li>
						<p>Referal Link</p>
						<p>{`https://greensphereinvest.com/?ref=${userDetails[0].username}`}</p>
					</li>
				</ul>
			</div>
		</motion.div>
	);
}

export default Referrals;
