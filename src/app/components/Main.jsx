"use client";

import styles from "@/app/styles/Main.module.scss";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
const Enter = {
	hidden: {
		opacity: 0,
		y: 50,
	},

	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: [0.76, 0, 0.24, 1],
		},
	},
};

function Main() {
	const [selection, setSelection] = useState(7.5);
	const [amount, setAmount] = useState(null);
	const result =
		amount === null ? 0 : (Number(selection) / 100) * Number(amount);
	const ref1 = useRef(null);
	const inView1 = useInView(ref1, { threshold: 0.1, once: true });

	const ref2 = useRef(null);
	const inView2 = useInView(ref2, { threshold: 0.1, once: true });

	const ref3 = useRef(null);
	const inView3 = useInView(ref3, { threshold: 0.1, once: true });

	const ref4 = useRef(null);
	const inView4 = useInView(ref4, { threshold: 0.1, once: true });

	const ref5 = useRef(null);
	const inView5 = useInView(ref5, { threshold: 0.1, once: true });

	const ref6 = useRef(null);
	const inView6 = useInView(ref6, { threshold: 0.1, once: true });

	const router = useRouter();

	return (
		<div className={styles.Main}>
			<section className={styles.sectionInvest}>
				<motion.div
					ref={ref1}
					variants={Enter}
					initial="hidden"
					animate={inView1 ? "animate" : ""}
					className={styles.headingContainer}
				>
					<h1 className={styles.heading}>Invest In Crypto In Minutes</h1>
					<p className={styles.headingParagraph}>
						Sign up today to invest in cryptocurrency
					</p>
				</motion.div>

				<motion.div
					ref={ref2}
					variants={Enter}
					initial="hidden"
					animate={inView2 ? "animate" : ""}
					className={styles.boxContainer}
				>
					<div className={styles.box}>
						<Image
							alt="user-icon"
							src={"/user-solid.svg"}
							height={40}
							width={40}
						/>
						<h2 className={styles.boxHeading}>Ready</h2>
						<p className={styles.boxParagraph}> Create your free account.</p>
					</div>
					<div className={styles.box}>
						<Image
							alt="user-icon"
							src={"/building-columns-solid.svg"}
							height={40}
							width={40}
						/>
						<h2 className={styles.boxHeading}>Set</h2>
						<p className={styles.boxParagraph}>Add funds to your account.</p>
					</div>
					<div className={styles.box}>
						<Image
							alt="user-icon"
							src={"/dollar-sign-solid.svg"}
							height={40}
							width={40}
						/>
						<h2 className={styles.boxHeading}>Invest</h2>
						<p className={styles.boxParagraph}>Invest with ease</p>
					</div>
				</motion.div>

				<motion.div
					ref={ref3}
					variants={Enter}
					initial="hidden"
					animate={inView3 ? "animate" : ""}
					className={styles.buttonContainer}
				>
					<button
						onClick={(e) => router.push("/signup")}
						className={styles.button}
					>
						Sign up
					</button>
				</motion.div>
			</section>
			<motion.section
				ref={ref4}
				variants={Enter}
				initial="hidden"
				animate={inView4 ? "animate" : ""}
				className={styles.sectionControl}
			>
				<div className={styles.sectionControlTextBox}>
					<h2 className={styles.sectionControlHeading}>
						Take control of your money
					</h2>
					<p className={styles.sectionControlParagraph}>
						Simply and securely invest into a variety of cryptocurrencies.
					</p>
				</div>
				<button className={styles.sectionControlButton}>Learn More</button>
			</motion.section>
			<section className={styles.sectionPlans}>
				<motion.div
					ref={ref5}
					variants={Enter}
					initial="hidden"
					animate={inView5 ? "animate" : ""}
					className={styles.boxContainer}
				>
					<div className={styles.box}>
						<Image
							alt="user-icon"
							src={"/user-solid.svg"}
							height={40}
							width={40}
						/>
						<h2 className={styles.boxHeading}>7.5%</h2>
						<p className={styles.boxParagraph}> Starter</p>
						<ul className={styles.boxList}>
							<li className={styles.boxListItem}>
								<h3>
									<span style={{ marginRight: ".2rem" }}>
										<Image
											src={"/dollar-sign-solid.svg"}
											width={10}
											height={10}
											alt="box-icon"
										/>
									</span>
									Min
								</h3>
								<h3>$50</h3>
							</li>
							<li className={styles.boxListItem}>
								<h3>
									<span style={{ marginRight: ".2rem" }}>
										<Image
											src={"/dollar-sign-solid.svg"}
											width={10}
											height={10}
											alt="box-icon"
										/>
									</span>
									Max
								</h3>
								<h3>$2000</h3>
							</li>
							<li className={styles.boxListItem}>
								<h3>
									<span style={{ marginRight: ".2rem" }}>
										<Image
											src={"/dollar-sign-solid.svg"}
											width={10}
											height={10}
											alt="box-icon"
										/>
									</span>
									Profit
								</h3>
								<h3>after 1 day</h3>
							</li>
							<li className={styles.boxListItem}>
								<h3>
									<span style={{ marginRight: ".2rem" }}>
										<Image
											src={"/hand-holding-dollar-solid.svg"}
											width={10}
											height={10}
											alt="box-icon"
										/>
									</span>
									Withdrawal
								</h3>
								<h3>Daily</h3>
							</li>
						</ul>
					</div>
					<div className={styles.box}>
						<Image
							alt="user-icon"
							src={"/building-columns-solid.svg"}
							height={40}
							width={40}
						/>
						<h2 className={styles.boxHeading}>15%</h2>
						<p className={styles.boxParagraph}>Premium</p>
						<ul className={styles.boxList}>
							<li className={styles.boxListItem}>
								<h3>
									<span style={{ marginRight: ".2rem" }}>
										<Image
											src={"/dollar-sign-solid.svg"}
											width={10}
											height={10}
											alt="box-icon"
										/>
									</span>
									Min
								</h3>
								<h3>$2100</h3>
							</li>
							<li className={styles.boxListItem}>
								<h3>
									<span style={{ marginRight: ".2rem" }}>
										<Image
											src={"/dollar-sign-solid.svg"}
											width={10}
											height={10}
											alt="box-icon"
										/>
									</span>
									Max
								</h3>
								<h3>$20000</h3>
							</li>
							<li className={styles.boxListItem}>
								<h3>
									<span style={{ marginRight: ".2rem" }}>
										<Image
											src={"/dollar-sign-solid.svg"}
											width={10}
											height={10}
											alt="box-icon"
										/>
									</span>
									Profit
								</h3>
								<h3>after 1 day</h3>
							</li>
							<li className={styles.boxListItem}>
								<h3>
									<span style={{ marginRight: ".2rem" }}>
										<Image
											src={"/hand-holding-dollar-solid.svg"}
											width={10}
											height={10}
											alt="box-icon"
										/>
									</span>
									Withdrawal
								</h3>
								<h3>Daily</h3>
							</li>
						</ul>
					</div>
					<div className={styles.box}>
						<Image
							alt="user-icon"
							src={"/dollar-sign-solid.svg"}
							height={40}
							width={40}
						/>
						<h2 className={styles.boxHeading}>30%</h2>
						<p className={styles.boxParagraph}>Ultimate</p>
						<ul className={styles.boxList}>
							<li className={styles.boxListItem}>
								<h3>
									<span style={{ marginRight: ".2rem" }}>
										<Image
											src={"/dollar-sign-solid.svg"}
											width={10}
											height={10}
											alt="box-icon"
										/>
									</span>
									Min
								</h3>
								<h3>$10100</h3>
							</li>
							<li className={styles.boxListItem}>
								<h3>
									<span style={{ marginRight: ".2rem" }}>
										<Image
											src={"/dollar-sign-solid.svg"}
											width={10}
											height={10}
											alt="box-icon"
										/>
									</span>
									Max
								</h3>
								<h3>$no limit</h3>
							</li>
							<li className={styles.boxListItem}>
								<h3>
									<span style={{ marginRight: ".2rem" }}>
										<Image
											src={"/dollar-sign-solid.svg"}
											width={10}
											height={10}
											alt="box-icon"
										/>
									</span>
									Profit
								</h3>
								<h3>after 2 days</h3>
							</li>
							<li className={styles.boxListItem}>
								<h3>
									<span style={{ marginRight: ".2rem" }}>
										<Image
											src={"/hand-holding-dollar-solid.svg"}
											width={10}
											height={10}
											alt="box-icon"
										/>
									</span>
									Withdrawal
								</h3>
								<h3>Daily</h3>
							</li>
						</ul>
					</div>
					<div className={styles.box}>
						<Image
							alt="user-icon"
							src={"/dollar-sign-solid.svg"}
							height={40}
							width={40}
						/>
						<h2 className={styles.boxHeading}>60%</h2>
						<p className={styles.boxParagraph}>Master Plan</p>
						<ul className={styles.boxList}>
							<li className={styles.boxListItem}>
								<h3>
									<span style={{ marginRight: ".2rem" }}>
										<Image
											src={"/dollar-sign-solid.svg"}
											width={10}
											height={10}
											alt="box-icon"
										/>
									</span>
									Min
								</h3>
								<h3>$20000</h3>
							</li>
							<li className={styles.boxListItem}>
								<h3>
									<span style={{ marginRight: ".2rem" }}>
										<Image
											src={"/dollar-sign-solid.svg"}
											width={10}
											height={10}
											alt="box-icon"
										/>
									</span>
									Max
								</h3>
								<h3>$no limit</h3>
							</li>
							<li className={styles.boxListItem}>
								<h3>
									<span style={{ marginRight: ".2rem" }}>
										<Image
											src={"/dollar-sign-solid.svg"}
											width={10}
											height={10}
											alt="box-icon"
										/>
									</span>
									Profit
								</h3>
								<h3>after 5 day</h3>
							</li>
							<li className={styles.boxListItem}>
								<h3>
									<span style={{ marginRight: ".2rem" }}>
										<Image
											src={"/hand-holding-dollar-solid.svg"}
											width={10}
											height={10}
											alt="box-icon"
										/>
									</span>
									Withdrawal
								</h3>
								<h3>After 5 days</h3>
							</li>
						</ul>
					</div>
				</motion.div>
				<motion.div
					ref={ref6}
					variants={Enter}
					initial="hidden"
					animate={inView6 ? "animate" : ""}
					className={styles.calculateContainer}
				>
					<div className={styles.calculate}>
						<div className={styles.calculateComponent1}>
							<select
								onChange={(e) => setSelection(e.target.value)}
								className={styles.calculateSelect}
								name=""
								id=""
							>
								<option value={7.5}>7.5% AFTER 1 DAY</option>
								<option value={15}>15% AFTER 1 DAY</option>
								<option value={30}>30% AFTER 2 DAY</option>
								<option value={60}>60% AFTER 5 DAY</option>
							</select>
							<input
								onChange={(e) => setAmount(e.target.value)}
								className={styles.calculateInput}
								type="text"
							/>
						</div>
						<div className={styles.calculateComponent2}>
							<div className={styles.calculateComponent2Box}>
								<h2>{result}</h2>
								<p>Daily Profit</p>
							</div>
							<div className={styles.calculateComponent2Box}>
								<h2>{result}</h2>
								<p>Total Return</p>
							</div>
						</div>
					</div>
				</motion.div>
			</section>
		</div>
	);
}

export default Main;
