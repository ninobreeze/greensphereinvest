"use client";

import styles from "@/app/styles/Footer.module.scss";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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

function Footer() {
	const ref1 = useRef(null);
	const inView1 = useInView(ref1, { threshold: 0.1, once: true });
	return (
		<div className={styles.Footer}>
			<motion.div
				ref={ref1}
				variants={Enter}
				initial="hidden"
				animate={inView1 ? "animate" : ""}
				className={styles.FooterContainer}
			>
				<div className={styles.FooterLogo}>
					<Image
						src={"/coins-solid.svg"}
						width={35}
						height={35}
						alt="coins-logo"
					/>
					<h1>CRYPTOSPHERE</h1>
				</div>

				<ul className={styles.FooterIcons}>
					<li>
						<Image src={"/bitcoin.svg"} width={35} height={35} alt="bitcoin" />
					</li>
					<li>
						<Image src={"/litecoin.svg"} width={35} height={35} alt="bitcoin" />
					</li>
					<li>
						<Image src={"/ethereum.svg"} width={35} height={35} alt="bitcoin" />
					</li>
					<li>
						<Image src={"/dogecoin.svg"} width={35} height={35} alt="bitcoin" />
					</li>
					<li>
						<Image src={"/trx.svg"} width={35} height={35} alt="bitcoin" />
					</li>
					<li>
						<Image
							src={"/bitcoincash.svg"}
							width={35}
							height={35}
							alt="bitcoin"
						/>
					</li>
					<li>
						<Image
							src={"/binancecoin.svg"}
							width={35}
							height={35}
							alt="bitcoin"
						/>
					</li>
					<li>
						<Image src={"/tether.svg"} width={35} height={35} alt="bitcoin" />
					</li>
				</ul>
				<p className={styles.FooterParagraph}>
					<span className={styles.FooterParagraphBold}>
						Risk Monitoring and Mitigation:
					</span>
					Our specialists continuously monitor the market and proactively manage
					risks. We stay updated on the latest economic indicators, regulatory
					changes, and global events that might impact investments. By closely
					tracking these factors, we can swiftly adjust our investment
					strategies to mitigate potential risks or take advantage of emerging
					opportunities.
				</p>
				<div className={styles.FooterBottomComponent}>
					<p>&copy; 2024 cryptosphere.com. All Right Reserved.</p>
					<p>57 Caerfai Bay Road, United kingdom</p>
				</div>
			</motion.div>
		</div>
	);
}

export default Footer;
