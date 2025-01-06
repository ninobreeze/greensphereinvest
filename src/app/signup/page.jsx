"use client";

import { motion } from "framer-motion";
import styles from "@/app/styles/signup.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import supabase from "@/services/supabase";
import Loader from "../components/Loader";

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
	const email = localStorage.getItem("email");
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		fullname: "",
		username: "",
		email: email || "",
		password: "",
	});

	async function checkUser(email) {
		const { data, error } = await supabase
			.from("users")
			.select("email")
			.eq("email", email);
		return data && Array.isArray(data) && data.length > 0;
	}
	async function handleSubmit(e) {
		e.preventDefault();
		setIsLoading(true);
		const userExists = await checkUser(formData.email);
		if (userExists) {
			alert("user exists");
		}
		const { data, error: signupError } = await supabase.auth.signUp({
			email: formData.email,
			password: formData.password,
		});
		if (signupError) {
			alert(`Signup failed: ${signupError}`);
			console.log(signupError);
			return;
		}

		const { UserData, insertError } = await supabase
			.from("users")
			.insert([
				{
					fullname: formData.fullname,
					username: formData.username,
					email: formData.email,
				},
			])
			.select();
		if (insertError) {
			alert(`Error inserting user data: ${insertError.message}`);
			return;
		}
		router.replace("/login");
		setIsLoading(false);
		console.log("user registered:", data.user);
		setFormData({
			fullname: "",
			username: "",
			email: "",
			password: "",
		});
	}

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className={styles.SignUp}>
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
							<h1 className={styles.NavBarLogo}>CRYPTOSPHERE</h1>
						</motion.div>
					</nav>
					<motion.div
						variants={MoveUp}
						initial="hidden"
						animate="visible"
						className={styles.Container}
					>
						<h1 className={styles.Heading}>Get Started</h1>
						<form onSubmit={handleSubmit} className={styles.Form} action="">
							<div className={styles.FormItem}>
								<label className={styles.FormLabel} htmlFor="">
									Full Name
								</label>
								<input
									required
									onChange={(e) =>
										setFormData({ ...formData, fullname: e.target.value })
									}
									className={styles.FormInput}
									type="text"
								/>
							</div>
							<div className={styles.FormItem}>
								<label className={styles.FormLabel} htmlFor="">
									Username
								</label>
								<input
									required
									onChange={(e) =>
										setFormData({ ...formData, username: e.target.value })
									}
									className={styles.FormInput}
									type="text"
								/>
							</div>
							<div className={styles.FormItem}>
								<label className={styles.FormLabel} htmlFor="">
									Email
								</label>
								<input
									required
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
									className={styles.FormInput}
									type="email"
									value={formData.email}
								/>
							</div>

							<div className={styles.FormItem}>
								<label className={styles.FormLabel} htmlFor="">
									Password
								</label>
								<input
									required
									onChange={(e) =>
										setFormData({ ...formData, password: e.target.value })
									}
									className={styles.FormInput}
									type="text"
								/>
							</div>
							<div className={styles.FormButtonContainer}>
								<button className={styles.FormButton}>Create Account</button>
							</div>
							<div className={styles.FormAlreadyContainer}>
								<p className={styles.FormAlreadyText}>
									Already have an account?{" "}
									<span onClick={(e) => router.push("/login")}>Log In</span>
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
