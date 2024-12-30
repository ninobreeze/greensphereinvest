"use client";

import styles from "@/app/styles/Dashboard.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
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

function page() {
	const router = useRouter();
	return (
		<div className={styles.Dashboard}>
			<div style={{ overflow: "hidden" }} className={styles.NavBar}>
				<motion.div
					variants={MoveUp}
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
					<h1 onClick={(e) => router.push("/")} className={styles.NavBarLogo}>
						CRYPTOSPHERE
					</h1>
				</motion.div>
				<div className={styles.NavBarNavigation}>
					<motion.ul
						variants={MoveUp}
						initial="hidden"
						animate="visible"
						className={styles.NavBarLinks}
					>
						<li className={styles.NavBarLinksItem}>Home</li>
						<li className={styles.NavBarLinksItem}>Bounty</li>
						<li className={styles.NavBarLinksItem}>Terms</li>
						<li className={styles.NavBarLinksItem}>FAQ</li>
						<li className={styles.NavBarLinksItem}>Support</li>
					</motion.ul>
				</div>
				<motion.div
					variants={MoveUp}
					initial="hidden"
					animate="visible"
					className={styles.NavBarButtonContainer}
				>
					{/* <h3
						onClick={(e) => router.push("/login")}
						className={styles.NavBarButtonLogin}
					>
						Log in
					</h3> */}
					<h3
						// onClick={(e) => router.push("/signup")}
						className={styles.NavBarButtonSignup}
					>
						Log out
					</h3>
				</motion.div>
				{/* <div className={styles.NavBarMenu}>
					<Image
						src={"/bars-solid.svg"}
						width={25}
						height={25}
						alt="menu"
						onClick={(e) => setIsOpen(!isOpen)}
					/>
				</div> */}
			</div>

			<div className={styles.Container}>
				<div className={styles.Group1}>
					<div className={styles.Box}>
						<Image
							alt="overview"
							src={"/acc_menu.png"}
							width={20}
							height={20}
						/>
						<h3>Overview</h3>
					</div>
					<div className={styles.Box}>
						<Image alt="deposit" src={"/deposit.png"} width={20} height={20} />
						<h3>Deposit</h3>
					</div>
					<div className={styles.Box}>
						<Image
							alt="withdrawal"
							src={"/withdrawal.png"}
							width={20}
							height={20}
						/>
						<h3>Withdrawal</h3>
					</div>
					<div className={styles.Box}>
						<Image alt="history" src={"/history.png"} width={20} height={20} />
						<h3>History</h3>
					</div>
				</div>
				<div className={styles.Group2}>
					<div className={styles.Box}>
						<Image
							alt="referral"
							src={"/referral.png"}
							width={20}
							height={20}
						/>
						<h3>Referral</h3>
					</div>
					<div className={styles.Box}>
						<Image alt="banner" src={"/banner.png"} width={20} height={20} />
						<h3>Banners</h3>
					</div>
					<div className={styles.Box}>
						<Image alt="profile" src={"/profile.png"} width={20} height={20} />
						<h3>Profile</h3>
					</div>
					<div className={styles.Box}>
						<Image
							alt="security"
							src={"/security.png"}
							width={20}
							height={20}
						/>
						<h3>Security</h3>
					</div>
				</div>
			</div>

			<div className={styles.Container2}>
				<div className={styles.Container2HeadingContainer}>
					<h2 className={styles.Container2Heading}>Account Overview</h2>
				</div>
				<div className={styles.OverviewBox1}>
					<div className={styles.OverviewBox1Item}>
						<Image alt="welcome" src={"/welcome.png"} width={20} height={20} />
						<div>
							<h4 className={styles.OverviewBox1PrimaryText}>Welcome</h4>
							<h3 className={styles.OverviewBox1SecondaryText}>
								Mattjeeter3324
							</h3>
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
							<h3 className={styles.OverviewBox2Group1ItemSecondary}>
								$3247.25
							</h3>
						</div>
						<div className={styles.OverviewBox2Group1Item}>
							<h3 className={styles.OverviewBox2Group1ItemPrimary}>
								Total Deposit
							</h3>
							<h3 className={styles.OverviewBox2Group1ItemSecondary}>
								$3247.25
							</h3>
						</div>
						<div className={styles.OverviewBox2Group1Item}>
							<h3 className={styles.OverviewBox2Group1ItemPrimary}>
								Last Deposit
							</h3>
							<h3 className={styles.OverviewBox2Group1ItemSecondary}>
								$3247.25
							</h3>
						</div>
					</div>

					<div className={styles.OverviewBox2Group2}>
						<div className={styles.OverviewBox2Group2Item}>
							<h3 className={styles.OverviewBox2Group2ItemPrimary}>
								Total Withdrawal
							</h3>
							<h3 className={styles.OverviewBox2Group2ItemSecondary}>
								$3247.25
							</h3>
						</div>
						<div className={styles.OverviewBox2Group2Item}>
							<h3 className={styles.OverviewBox2Group2ItemPrimary}>
								Total Withdrawal
							</h3>
							<h3 className={styles.OverviewBox2Group2ItemSecondary}>
								$3247.25
							</h3>
						</div>
						<div className={styles.OverviewBox2Group2Item}>
							<h3 className={styles.OverviewBox2Group2ItemPrimary}>
								Last Withdrawal
							</h3>
							<h3 className={styles.OverviewBox2Group2ItemSecondary}>
								$3247.25
							</h3>
						</div>
					</div>
				</div>
				<div className={styles.OverviewBox3}>
					<div className={styles.OverviewBox3HeadingContainer}>
						<h2>Crypto Balance</h2>
					</div>
					<div className={styles.OverviewBox3BoxContainer}>
						<div className={styles.OverviewBox3Box}>
							<Image
								alt="bitcoin"
								src={"/bitcoin.svg"}
								width={20}
								height={20}
							/>
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
			</div>

			<Footer />
		</div>
	);
}

export default page;
