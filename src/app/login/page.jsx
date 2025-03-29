"use client";

import { motion } from "framer-motion";
import styles from "@/app/styles/Login.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import supabase from "@/services/supabase";
import Loader from "../components/Loader";
import { LoadingContext } from "@/contexts/loading";
import { toast } from "react-toastify";

const MoveDown = {
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

function page() {
	const router = useRouter();
	const { isLoading, setIsLoading } = useContext(LoadingContext);
	function notify(error) {
		error ? toast.error(error.message) : "";
	}

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	}

	async function handleLogin(e) {
		e.preventDefault();
		setIsLoading(true);

		try {
			const { data, error } = await supabase.auth.signInWithPassword({
				email: formData.email,
				password: formData.password,
			});
			if (error) {
				notify(error);
				setFormData({
					email: "",
					password: "",
				});
				setIsLoading(false);
				return;
			}
			router.replace("/dashboard");
		} catch (err) {
			alert("error signing in :", err);
		}
	}
	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className={styles.Login}>
					<nav className={styles.NavBar}>
						<motion.div
							onClick={(e) => router.push("/")}
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
							<h1 className={styles.NavBarLogo}>GREENSPHEREINVEST</h1>
						</motion.div>
					</nav>
					<motion.div
						variants={MoveUp}
						initial="hidden"
						animate="visible"
						className={styles.Container}
					>
						<h1 className={styles.Heading}>Log In</h1>
						<form onSubmit={handleLogin} className={styles.Form} action="">
							<div className={styles.FormItem}>
								<label className={styles.FormLabel} htmlFor="">
									Email
								</label>
								<input
									onChange={handleChange}
									className={styles.FormInput}
									name="email"
									type="email"
									required
								/>
							</div>

							<div className={styles.FormItem}>
								<label className={styles.FormLabel} htmlFor="">
									Password
								</label>
								<input
									required
									onChange={handleChange}
									className={styles.FormInput}
									name="password"
									type="text"
								/>
							</div>
							<div className={styles.FormButtonContainer}>
								<button className={styles.FormButton}>Log In</button>
							</div>
							<div className={styles.FormAlreadyContainer}>
								<p className={styles.FormAlreadyText}>
									Don't have an account?{" "}
									<span onClick={(e) => router.push("/signup")}>
										Get Started
									</span>
								</p>
							</div>
						</form>
					</motion.div>
				</div>
			)}
		</>
	);
}

export default page;
