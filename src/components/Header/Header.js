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
				<img src={Logo} className={styles.logo_image} />
			</div>
			<nav className={styles.nav}>
				<ul className={styles.nav_list}>
					<li className={styles.nav_item}>
						<div className={`${styles.section} ${styles.search}`}>
							<Search />
						</div>
					</li>
					<li className={styles.nav_item}>
						<div className={`${styles.section} ${styles.items}`}>
							<HeaderItems />
						</div>
					</li>
				</ul>
				<ul className={styles.nav_list}>
					<li className={styles.nav_item}>
						<div className={`${styles.section} ${styles.actions}`}>
							<HeaderActions />
						</div>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Header
