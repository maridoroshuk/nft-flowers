import React from "react"
import styles from "./Header.module.css"
import Logo from "../../assets/Logo.png"
import Search from "./Search/Search"
import HeaderItems from "./HeaderItems/HeaderItems"
import HeaderActions from "./HeaderActions/HeaderActions"

function Header() {
	return (
		<div className={styles.header}>
			<div className={`${styles.section} ${styles.logo}`}>
				<img src={Logo} className={styles.logo} />
			</div>
			<div className={`${styles.section} ${styles.search}`}>
				<Search />
			</div>
			<div className={`${styles.section} ${styles.items}`}>
				<HeaderItems/>
			</div>
			<div className={`${styles.section} ${styles.actions}`}>
				<HeaderActions/>
			</div>
		</div>
	)
}

export default Header
