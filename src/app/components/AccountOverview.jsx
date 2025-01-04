"use client";

import styles from "@/app/styles/AccountOverview.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

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

function AccountOverview() {
	return (
		<motion.div
			variants={MoveUp}
			initial="hidden"
			animate="visible"
			className={styles.Container2}
		>
			<div className={styles.Container2HeadingContainer}>
				<h2 className={styles.Container2Heading}>Account Overview</h2>
			</div>
			<div className={styles.OverviewBox1}>
				<div className={styles.OverviewBox1Item}>
					<Image alt="welcome" src={"/welcome.png"} width={20} height={20} />
					<div>
						<h4 className={styles.OverviewBox1PrimaryText}>Welcome</h4>
						<h3 className={styles.OverviewBox1SecondaryText}>Mattjeeter3324</h3>
					</div>
				</div>
				<div className={styles.OverviewBox1Item}>
					<Image alt="email" src={"/email.png"} width={20} height={20} />
					<div>
						<h4 className={styles.OverviewBox1PrimaryText}>Email</h4>
						<h3 className={styles.OverviewBox1SecondaryText}>
							jeetermatthew@yahoo.com
						</h3>
					</div>
				</div>
				<div className={styles.OverviewBox1Item}>
					<Image alt="balance" src={"/balance.png"} width={20} height={20} />
					<div>
						<h4 className={styles.OverviewBox1PrimaryText}>Balance</h4>
						<h3 className={styles.OverviewBox1SecondaryText}>$39877.25</h3>
					</div>
				</div>
			</div>
			<div className={styles.OverviewBox2}>
				<div className={styles.OverviewBox2Group1}>
					<div className={styles.OverviewBox2Group1Item}>
						<h3 className={styles.OverviewBox2Group1ItemPrimary}>
							Total Earned
						</h3>
						<h3 className={styles.OverviewBox2Group1ItemSecondary}>$3247.25</h3>
					</div>
					<div className={styles.OverviewBox2Group1Item}>
						<h3 className={styles.OverviewBox2Group1ItemPrimary}>
							Total Deposit
						</h3>
						<h3 className={styles.OverviewBox2Group1ItemSecondary}>$3247.25</h3>
					</div>
					<div className={styles.OverviewBox2Group1Item}>
						<h3 className={styles.OverviewBox2Group1ItemPrimary}>
							Last Deposit
						</h3>
						<h3 className={styles.OverviewBox2Group1ItemSecondary}>$3247.25</h3>
					</div>
				</div>

				<div className={styles.OverviewBox2Group2}>
					<div className={styles.OverviewBox2Group2Item}>
						<h3 className={styles.OverviewBox2Group2ItemPrimary}>
							Total Withdrawal
						</h3>
						<h3 className={styles.OverviewBox2Group2ItemSecondary}>$3247.25</h3>
					</div>
					<div className={styles.OverviewBox2Group2Item}>
						<h3 className={styles.OverviewBox2Group2ItemPrimary}>
							Total Withdrawal
						</h3>
						<h3 className={styles.OverviewBox2Group2ItemSecondary}>$3247.25</h3>
					</div>
					<div className={styles.OverviewBox2Group2Item}>
						<h3 className={styles.OverviewBox2Group2ItemPrimary}>
							Last Withdrawal
						</h3>
						<h3 className={styles.OverviewBox2Group2ItemSecondary}>$3247.25</h3>
					</div>
				</div>
			</div>
			<div className={styles.OverviewBox3}>
				<div className={styles.OverviewBox3HeadingContainer}>
					<h2>Crypto Balance</h2>
				</div>
				<div className={styles.OverviewBox3BoxContainer}>
					<div className={styles.OverviewBox3Box}>
						<Image alt="bitcoin" src={"/bitcoin.svg"} width={20} height={20} />
						<h3>$33249.75</h3>
						<h4>Bitcoin</h4>
					</div>
					<div className={styles.OverviewBox3Box}>
						<Image alt="bitcoin" src={"/tether.svg"} width={20} height={20} />
						<h3>$33249.75</h3>
						<h4>Usdt TRC20</h4>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default AccountOverview;
