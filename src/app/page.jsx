import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import styles from "./page.module.scss"

function page() {
	return (
		<div className={styles.Page}>
			<Header />
			<Main/>
			<Footer/>
		</div>
	);
}

export default page;
