"use client";

import styles from "@/app/styles/Deposit.module.scss";
import Image from "next/image";
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

function Deposit() {
	return (
		<motion.div
			variants={MoveUp}
			initial="hidden"
			animate="visible"
			className={styles.Container2}
		>
			<div className={styles.Container2HeadingContainer}>
				<h2 className={styles.Container2Heading}>Deposit</h2>
			</div>

			<div className={styles.ContainerBox}>
				<table>
					<thead>
						<tr>
							<th>Select</th>
							<th>Plan</th>
							<th>Min / Max</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<input name="plan" type="radio" />
							</td>
							<td>Starter</td>
							<td>$50.00 - $2000.00</td>
						</tr>
						<tr>
							<td>
								<input name="plan" type="radio" />
							</td>
							<td>Premium</td>
							<td>$2100.00 - 20000.00</td>
						</tr>
						<tr>
							<td>
								<input name="plan" type="radio" />
							</td>
							<td>Ultimate</td>
							<td>$10100.00 - ♾️</td>
						</tr>
						<tr>
							<td>
								<input name="plan" type="radio" />
							</td>
							<td>Master</td>
							<td>$20000.00 - ♾️</td>
						</tr>
					</tbody>
				</table>
				<div className={styles.OverviewBox3}>
					<div className={styles.OverviewBox3HeadingContainer}>
						<h2>Select Wallet</h2>
					</div>
					<div className={styles.OverviewBox3BoxContainer}>
						<div className={styles.OverviewBox3Box}>
							<Image
								alt="dollar"
								src={"/dollar-green-background.svg"}
								width={20}
								height={20}
							/>
							<h3>$0</h3>
							<h4>Bank Wire</h4>
						</div>
						<div className={styles.OverviewBox3Box}>
							<Image
								alt="bitcoin"
								src={"/bitcoin.svg"}
								width={20}
								height={20}
							/>
							<h3>$0</h3>
							<h4>Bitcoin</h4>
						</div>
						<div className={styles.OverviewBox3Box}>
							<Image
								alt="ethereum"
								src={"/ethereum.svg"}
								width={20}
								height={20}
							/>
							<h3>$0</h3>
							<h4>Ethereum</h4>
						</div>
						<div className={styles.OverviewBox3Box}>
							<Image alt="tether" src={"/tether.svg"} width={20} height={20} />
							<h3>$0</h3>
							<h4>Usdt TRC20</h4>
						</div>
					</div>
				</div>
				<div className={styles.deposit}>
					<h3>Amount</h3>
					<input type="text" placeholder="50.00" />
					<button>Deposit</button>
				</div>
			</div>
		</motion.div>
	);
}

export default Deposit;
