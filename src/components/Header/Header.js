import React from "react"
import styles from "./Header.module.css"
import Logo from "../../assets/Logo.png"
import Search from "../Search/Search"

function Header() {
	return (
		<div className={styles.header}>
			<div className={`${styles.section} ${styles.logo}`}>
				<img src={Logo} className={styles.logo} />
			</div>
			<div className={`${styles.section} ${styles.search}`}>
				<Search />
			</div>
			<div className={`${styles.section} ${styles.search}`}
		</div>
	)
}

export default Header
