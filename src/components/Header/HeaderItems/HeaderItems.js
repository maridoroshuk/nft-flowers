import React from 'react'
import styles from "./HeaderItems.module.css"

function HeaderItems() {
  return (
	<div className={styles.items}>
		<p className={styles.item}>Drops</p>
		<p className={styles.item}>Marketplace</p>
		<p className={styles.item}>Create</p>
	</div>
  )
}

export default HeaderItems