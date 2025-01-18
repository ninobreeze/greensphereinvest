import "./globals.scss";
import { LoadingProvider } from "@/contexts/loading";
import { ToastContainer } from "react-toastify";

export const metadata = {
	title: "Greensphereinvest",
	description: "invest in cryptocurrency using Greensphereinvest",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/coins-solid.svg" type="image/svg" />
			</head>
			<LoadingProvider>
				<body>
					{children}
					<ToastContainer
						position="top-center"
						autoClose={3000}
						hideProgressBar={true}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						theme="light"
					/>
				</body>
			</LoadingProvider>
		</html>
	);
}
