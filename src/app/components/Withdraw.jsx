"use client";

import styles from "@/app/styles/Withdraw.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import supabase from "@/services/supabase";
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

function Withdraw() {
	const { userDetails, setIsOpen } = useContext(UserContext);
	const [amount, setAmount] = useState(null);
	const [wallet, setWallet] = useState(null);
	async function changeWithdrawalValue() {
		try {
			const { data, error } = await supabase
				.from("users")
				.update({ PendingWithdrawal: amount })
				.eq("email", userDetails[0].email);
		} catch (error) {
			alert(error);
		}
	}

	function withdrawalCompleted() {
		if (Number(amount) > 1 && wallet !== null) {
			changeWithdrawalValue();
			setIsOpen("overview");
		}
	}
	return (
		<motion.div
			variants={MoveUp}
			initial="hidden"
			animate="visible"
			className={styles.Container2}
		>
			<div className={styles.Container2HeadingContainer}>
				<h2 className={styles.Container2Heading}>Withdraw</h2>
			</div>

			<div className={styles.ContainerBox}>
				<table>
					<thead>
						<tr>
							<th>Select</th>
							<th>Processing</th>
							<th>Available</th>
							<th>Pending</th>
							<th>Account</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<input name="plan" type="radio" />
							</td>
							<td className={styles.processing}>
								<Image
									className={styles.processingImage}
									alt="dollar"
									src={"/dollar-green-background.svg"}
									width={20}
									height={20}
								/>
								<p className={styles.processingText}>Bank Wire</p>
							</td>
							<td>$0</td>
							<td>$0</td>
							<td>NOT SET</td>
						</tr>
						<tr>
							<td>
								<input name="plan" type="radio" />
							</td>
							<td className={styles.processing}>
								<Image
									alt="bitcoin"
									src={"/bitcoin.svg"}
									width={20}
									height={20}
								/>{" "}
								<p className={styles.processingText}>Bitcoin</p>
							</td>
							<td>$0</td>
							<td>$0</td>
							<td>NOT SET</td>
						</tr>
						<tr>
							<td>
								<input name="plan" type="radio" />
							</td>
							<td className={styles.processing}>
								<Image
									alt="ethereum"
									src={"/ethereum.svg"}
									width={20}
									height={20}
								/>
								<p className={styles.processingText}>Ethereum</p>
							</td>
							<td>$0</td>
							<td>$0</td>
							<td>NOT SET</td>
						</tr>
						<tr>
							<td>
								<input name="plan" type="radio" />
							</td>
							<td className={styles.processing}>
								<Image
									alt="tether"
									src={"/tether.svg"}
									width={20}
									height={20}
								/>
								<p className={styles.processingText}>Usdt TRC20</p>
							</td>
							<td>$0</td>
							<td>$0</td>
							<td>NOT SET</td>
						</tr>
					</tbody>
				</table>

				<div className={styles.deposit}>
					<h3>Amount</h3>
					<input
						onChange={(e) => setWallet(e.target.value)}
						type="text"
						placeholder="wallet address"
					/>
					<input
						onChange={(e) => setAmount(e.target.value)}
						type="number"
						placeholder="50.00"
					/>
					<button onClick={withdrawalCompleted}>Withdraw</button>
				</div>
			</div>
		</motion.div>
	);
}

export default Withdraw;
