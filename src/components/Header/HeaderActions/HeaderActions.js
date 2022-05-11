import React from "react"
import styles from "./HeaderActions.module.css"
import Theme from "../../../assets/theme-switch.png"

function HeaderActions() {

	const submitHandler = (e) => {
		e.preventDefault()
	}
	
	return (
		<div className={styles.actions}>
			<div className={`${styles.action} ${styles.switch}`}>
				<img src={Theme} className={styles.icon} />
			</div>
			<div className={`${styles.action} ${styles.btn}`}>
				<button type="button" className={styles.login} onSubmit={submitHandler}>GET IN</button>
			</div>
		</div>
	)
}

export default HeaderActions
