import React from "react"
import styles from "./Card.module.css"
import Weth from "../../../assets/weth.png"

function Card({ id, name, traits, image }) {
	return (
		<div className={styles.collection}>
			<img src={image} className={styles.pic} alt="" />
			<div className={styles.details}>
				<div className={styles.name}>
					{name} <span className={styles.id}>#{id}</span>
				</div>
				<div className={styles.price_container}>
					<img src={Weth} className={styles.weth} alt="" />
					<div className={styles.price}>{traits[0]?.value}</div>
				</div>
			</div>
		</div>
	)
}

export default Card
