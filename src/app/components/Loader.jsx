import styles from "@/app/styles/Loader.module.scss"
function Loader() {
    return (
        <div className={styles.SpinnerContainer}>
            <div className={styles.spinner}></div>
        </div>
    )
}

export default Loader
