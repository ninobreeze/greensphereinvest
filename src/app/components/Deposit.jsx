"use client";

import styles from "@/app/styles/Deposit.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { UserContext } from "../dashboard/page";
import { toast } from "react-toastify";

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
	const { plan, setPlan } = useContext(UserContext);
	const { wallet, setWallet } = useContext(UserContext);
	const { depositAmount, setDepositAmount } = useContext(UserContext);
	const { isOpen, setIsOpen } = useContext(UserContext);
	const [color, setColor] = useState("#ffffff");

	function handleSelection(e) {
		setPlan(e.target.value);
	}
	function getPlanValue(plan) {
		switch (plan) {
			case "starter":
				return "50.00";
			case "premium":
				return "2100";
			case "ultimate":
				return "10100";
			case "master":
				return "20000";
			default:
				return "50.00";
		}
	}
	function handleCoinSelection(value) {
		setWallet(value);
		setColor("#011b33");
	}
	function handleDeposit() {
		if (Number(depositAmount) < 50) {
			toast.error("amout must be at least $50");
			return;
		}
		setIsOpen("popup");
	}

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
								<input
									name="plan"
									type="radio"
									value={"starter"}
									onClick={handleSelection}
								/>
							</td>
							<td>Starter</td>
							<td>$50.00 - $2000.00</td>
						</tr>
						<tr>
							<td>
								<input
									name="plan"
									type="radio"
									value={"premium"}
									onClick={handleSelection}
								/>
							</td>
							<td>Premium</td>
							<td>$2100.00 - 20000.00</td>
						</tr>
						<tr>
							<td>
								<input
									name="plan"
									type="radio"
									value={"ultimate"}
									onClick={handleSelection}
								/>
							</td>
							<td>Ultimate</td>
							<td>$10100.00 - ♾️</td>
						</tr>
						<tr>
							<td>
								<input
									name="plan"
									type="radio"
									value={"master"}
									onClick={handleSelection}
								/>
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
						<div
							style={{
								cursor: "pointer",
								backgroundColor: wallet === "bankwire" ? "#011b33" : "",
								color: wallet === "bankwire" ? "#ffffff" : "",
								transition: " all .2s",
							}}
							onClick={() => handleCoinSelection("bankwire")}
							className={styles.OverviewBox3Box}
						>
							<Image
								alt="dollar"
								src={"/dollar-green-background.svg"}
								width={20}
								height={20}
							/>
							<h3>$0</h3>
							<h4>Bank Wire</h4>
						</div>
						<div
							style={{
								cursor: "pointer",
								backgroundColor: wallet === "bitcoin" ? "#011b33" : "",
								color: wallet === "bitcoin" ? "#ffffff" : "",
								transition: " all .2s",
							}}
							onClick={() => handleCoinSelection("bitcoin")}
							className={styles.OverviewBox3Box}
						>
							<Image
								alt="bitcoin"
								src={"/bitcoin.svg"}
								width={20}
								height={20}
							/>
							<h3>$0</h3>
							<h4>Bitcoin</h4>
						</div>
						<div
							style={{
								cursor: "pointer",
								backgroundColor: wallet === "ethereum" ? "#011b33" : "",
								color: wallet === "ethereum" ? "#ffffff" : "",
								transition: " all .2s",
							}}
							onClick={() => handleCoinSelection("ethereum")}
							className={styles.OverviewBox3Box}
						>
							<Image
								alt="ethereum"
								src={"/ethereum.svg"}
								width={20}
								height={20}
							/>
							<h3>$0</h3>
							<h4>Ethereum</h4>
						</div>
						<div
							style={{
								cursor: "pointer",
								backgroundColor: wallet === "tether" ? "#011b33" : "",
								color: wallet === "tether" ? "#ffffff" : "",
								transition: " all .2s",
							}}
							onClick={() => handleCoinSelection("tether")}
							className={styles.OverviewBox3Box}
						>
							<Image alt="tether" src={"/tether.svg"} width={20} height={20} />
							<h3>$0</h3>
							<h4>Usdt TRC20</h4>
						</div>
					</div>
				</div>
				<div className={styles.deposit}>
					<h3>Amount</h3>
					<input
						min={getPlanValue(plan)}
						type="number"
						placeholder={getPlanValue(plan)}
						onChange={(e) => setDepositAmount(e.target.value)}
					/>
					<button onClick={handleDeposit}>Deposit</button>
				</div>
			</div>
		</motion.div>
	);
}

export default Deposit;
