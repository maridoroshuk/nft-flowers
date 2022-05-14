import React from "react"
import styles from "./MainCard.module.css"
import Instagram from "../../../assets/instagram.png"
import Twitter from "../../../assets/twitter.png"
import More from "../../../assets/more.png"

function MainCard({ img, name, ownerImg }) {
	return (
		<div className={styles.main}>
			<div className={styles.content}>
				<div className={styles.container}>
					<img src={img} className={styles.selectedFlower} alt="" />
				</div>
			</div>
			<div className={styles.details}>
				<h1 className={styles.title}>{name}</h1>
				<span className={styles.flowerNum}>#3</span>
			</div>
			<div className={styles.owner}>
				<div className={styles.owner__container}>
					<img src={ownerImg} alt="" />
				</div>
				<div className={styles.owner__details}>
					<div className={styles.owner__detailsAndHandle}>
            <div>address</div>
            <div className={styles.owner__handle}></div>
          </div>
          <div className={styles.owner__link}>
              <img src={Instagram} alt="instagram link"/>
          </div>
          <div className={styles.owner__link}>
              <img src={Twitter} alt="twitter link"/>
          </div>
          <div className={styles.owner__link}>
              <img src={More} alt="more link"/>
          </div>
				</div>
			</div>
		</div>
	)
}

export default MainCard
