import styles from "@/app/styles/popup.module.scss";
import Image from "next/image";
import { useContext, useState } from "react";
import { UserContext } from "../dashboard/page";
import { motion } from "framer-motion";
import supabase from "@/services/supabase";

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

function Popup() {
	const {
		isOpen,
		setIsOpen,
		plan,
		setPlan,
		wallet,
		setWallet,
		depositAmount,
		userDetails,
	} = useContext(UserContext);

	function getPlanValue(plan) {
		switch (plan) {
			case "starter":
				return "7.5% after 1 day";
			case "premium":
				return "15% after 1 day";
			case "ultimate":
				return "30% after 2 day";
			case "master":
				return "60% after 5 day";
			default:
				return "7.5% after 1 day";
		}
	}

	async function changeDepositValue() {
		try {
			const { data, error } = await supabase
				.from("users")
				.update({ LastDeposit: `pending(${depositAmount}) ` })
				.eq("email", userDetails[0].email);
		} catch (error) {
			alert(error);
		}
	}

	function paymentCompleted() {
		changeDepositValue();
		setIsOpen("overview");
	}

	return (
		<motion.div
			variants={MoveUp}
			initial="hidden"
			animate="visible"
			className={styles.Container}
		>
			<div className={styles.Popup}>
				<div>
					<Image
						src={"/circle-xmark-solid.svg"}
						height={30}
						width={30}
						alt="close"
						onClick={() => setIsOpen(null)}
					/>
				</div>
				<h2 className={styles.PopupHeading}>Wallet Address:</h2>
				<p className={styles.PopupWalletAddress}>
					bc1qrhzzx7506h60pw30jrymgd3kv7p8ys892wz0zx
				</p>
				<ul>
					<li>
						<p>Plan:</p>
						<p>{plan}</p>
					</li>
					<li>
						<p>Profit:</p>
						<p>{getPlanValue(plan)}</p>
					</li>
					<li>
						<p>Principal Return:</p>
						<p>Yes</p>
					</li>
					<li>
						<p>Principal Withdraw:</p>
						<p>Not available</p>
					</li>
					<li>
						<p>Credit Amount:</p>
						<p>{`$${depositAmount}`}</p>
					</li>
					<li>
						<p>Deposit Fee:</p>
						<p> ($0.00)</p>
					</li>
					<li>
						<p>Debit Amount:</p>
						<p>0</p>
					</li>
				</ul>
				<button onClick={paymentCompleted}>i have completed the payment</button>
			</div>
		</motion.div>
	);
}

export default Popup;
