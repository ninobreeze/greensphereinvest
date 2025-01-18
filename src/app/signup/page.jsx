"use client";

import { motion } from "framer-motion";
import styles from "@/app/styles/signup.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import supabase from "@/services/supabase";
import Loader from "../components/Loader";
import { LoadingContext } from "@/contexts/loading";
import crypto from "crypto-browserify";
import emailjs from "emailjs-com";

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

function generateOTP(length) {
	try {
		const randomNumber = parseInt(
			crypto.randomBytes(Math.ceil(length / 2)).toString("hex"),
			16
		);
		const otp = randomNumber % Math.pow(10, length);
		return otp.toString().padStart(length, "0");
	} catch (error) {
		alert(error);
	}
}
async function sendOTPEmail({ username, otp, email }) {
	try {
		const response = await emailjs.send(
			"service_kvp8b0s",
			"template_gqownt9",
			{
				user_name: username,
				otp: otp,
				to_email: email,
			},
			"gXVxxNX63A3TrMlQa"
		);

		console.log("Email sent successfully:", response);
		return true;
	} catch (error) {
		console.error("Failed to send email:", error);
		return false;
	}
}

function Page() {
	const router = useRouter();
	const { isLoading, setIsLoading } = useContext(LoadingContext);
	const [formData, setFormData] = useState({
		fullname: "",
		username: "",
		email: "",
		password: "",
	});
	const [emailSent, setEmailSent] = useState(false);
	const [generatedOTP, setGeneratedOTP] = useState(null);
	const [otp, setOtp] = useState(null);

	useEffect(function () {
		const email = localStorage.getItem("email");
		if (email) {
			setFormData({ ...formData, email: email });
		}
	}, []);

	async function checkUser(email) {
		try {
			const { data, error } = await supabase
				.from("users")
				.select("email")
				.eq("email", email);
			if (error) {
				throw error;
			}
			return data && Array.isArray(data) && data.length > 0;
		} catch (error) {
			console.error("Error checking user:", error);
			return false;
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setIsLoading(true);

		const userExists = await checkUser(formData.email);
		if (userExists) {
			alert("user exists");
			setIsLoading(false);
			return;
		}
		const generatedOTP = generateOTP(6);
		setGeneratedOTP(generatedOTP);
		const emailSent = await sendOTPEmail({
			username: formData.username,
			otp: generatedOTP,
			email: formData.email,
		});
		emailSent && setEmailSent(true);
		setIsLoading(false);
	}

	async function handleVerify() {
		setIsLoading(true);
		if (otp === generatedOTP) {
			const { data, error: signupError } = await supabase.auth.signUp({
				email: formData.email,
				password: formData.password,
			});
			if (signupError) {
				alert(`Signup failed: ${signupError}`);
				console.log(signupError);
				return;
			}

			const { insertError } = await supabase
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
		} else {
			alert("Invalid OTP");
			setIsLoading(false);
			return;
		}
	}

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					{!emailSent && (
						<div className={styles.SignUp}>
							<nav className={styles.NavBar}>
								<motion.div
									onClick={() => router.push("/")}
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
										<button className={styles.FormButton}>
											Create Account
										</button>
									</div>
									<div className={styles.FormAlreadyContainer}>
										<p className={styles.FormAlreadyText}>
											Already have an account?{" "}
											<span onClick={() => router.push("/login")}>Log In</span>
										</p>
									</div>
								</form>
							</motion.div>
						</div>
					)}
					{emailSent && (
						<motion.div
							variants={MoveUp}
							initial="hidden"
							animate="visible"
							className={styles.VerifyEmail}
						>
							<h2>Verify your email address</h2>
							<input
								onChange={(e) => setOtp(e.target.value)}
								type="text"
								placeholder="Enter otp"
							/>
							<button type="button" onClick={handleVerify}>
								Verify
							</button>
						</motion.div>
					)}
				</>
			)}
		</>
	);
}

export default Page;
