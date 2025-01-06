"use client";

import styles from "@/app/styles/Dashboard.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";
import AccountOverview from "../components/AccountOverview";
import Profile from "../components/Profile";
import Deposit from "../components/Deposit";
import Withdraw from "../components/Withdraw";
import Referrals from "../components/Referrals";
import { useState, useEffect, useContext } from "react";
import supabase from "@/services/supabase";
import Unauthorized from "../components/Unauthorized";
import Loader from "../components/Loader";
import { LoadingContext } from "@/contexts/loading";

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

const MoveDown = {
	hidden: {
		opacity: 0,
		y: -50,
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
	const [isOpen, setIsOpen] = useState("overview");
	const [userEmail, setUserEmail] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const { isLoading, setIsLoading } = useContext(LoadingContext);

	async function getUserData() {
		const { data, error } = await supabase
			.from("users")
			.select("*")
			.eq("email", userEmail);
	}

	useEffect(
		function () {
			async function checkUser() {
				const {
					data: { user },
					error,
				} = await supabase.auth.getUser();

				if (error || !user) {
					setTimeout(() => {
						router.push("/login");
					}, 2000);
				} else {
					console.log(getUserData());
					setIsAuthenticated(true);
					setIsLoading(false);
					const { id, email } = user;
					setUserEmail(`${email}`);
				}
			}
			checkUser();
		},
		[router]
	);

	async function handleLogout() {
		const { error } = await supabase.auth.signOut();

		if (error) {
			console.log(error);
			alert(error);
		}
		router.replace("/");
	}

	return (
		<>
			{isLoading && <Loader />}

			{isAuthenticated && (
				<div className={styles.Dashboard}>
					<div style={{ overflow: "hidden" }} className={styles.NavBar}>
						<motion.div
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
							<h1
								onClick={(e) => router.push("/")}
								className={styles.NavBarLogo}
							>
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
							<h3 onClick={handleLogout} className={styles.NavBarButtonSignup}>
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

					<motion.div
						variants={MoveUp}
						initial="hidden"
						animate="visible"
						className={styles.Container}
					>
						<div className={styles.Group1}>
							<div
								onClick={(e) => setIsOpen("overview")}
								className={styles.Box}
							>
								<Image
									alt="overview"
									src={"/acc_menu.png"}
									width={20}
									height={20}
								/>
								<h3>Overview</h3>
							</div>
							<div onClick={(e) => setIsOpen("deposit")} className={styles.Box}>
								<Image
									alt="deposit"
									src={"/deposit.png"}
									width={20}
									height={20}
								/>
								<h3>Deposit</h3>
							</div>
							<div
								onClick={(e) => setIsOpen("withdraw")}
								className={styles.Box}
							>
								<Image
									alt="withdrawal"
									src={"/withdrawal.png"}
									width={20}
									height={20}
								/>
								<h3>Withdrawal</h3>
							</div>
							<div onClick={(e) => setIsOpen("history")} className={styles.Box}>
								<Image
									alt="history"
									src={"/history.png"}
									width={20}
									height={20}
								/>
								<h3>History</h3>
							</div>
						</div>
						<div className={styles.Group2}>
							<motion.div
								onClick={(e) => setIsOpen("referral")}
								className={styles.Box}
							>
								<Image
									alt="referral"
									src={"/referral.png"}
									width={20}
									height={20}
								/>
								<h3>Referral</h3>
							</motion.div>
							<div onClick={(e) => setIsOpen("banner")} className={styles.Box}>
								<Image
									alt="banner"
									src={"/banner.png"}
									width={20}
									height={20}
								/>
								<h3>Banners</h3>
							</div>
							<div onClick={(e) => setIsOpen("profile")} className={styles.Box}>
								<Image
									alt="profile"
									src={"/profile.png"}
									width={20}
									height={20}
								/>
								<h3>Profile</h3>
							</div>
							<div
								onClick={(e) => setIsOpen("security")}
								className={styles.Box}
							>
								<Image
									alt="security"
									src={"/security.png"}
									width={20}
									height={20}
								/>
								<h3>Security</h3>
							</div>
						</div>
					</motion.div>

					{isOpen === "overview" && <AccountOverview />}
					{isOpen === "profile" && <Profile />}
					{isOpen === "referral" && <Referrals />}
					{isOpen === "deposit" && <Deposit />}
					{isOpen === "withdraw" && <Withdraw />}
					<Footer />
				</div>
			)}

			{!isAuthenticated && <Unauthorized />}
		</>
	);
}

export default page;
