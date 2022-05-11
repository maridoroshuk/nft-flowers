import React, { useState } from "react"
import SearchIcon from "../../assets/search-icon.png"
import styles from "./Search.module.css"

function Search() {
	const [userInut, setUserInput] = useState("")


	const userInputChangeHandler = (e) => {
		setUserInput(e.target.value)
	}

	const submitHandler = (e) => {
		e.preventDefault()


		setUserInput("")
	}

	return (
		<div className={styles.search}>
			<form className={styles.form} onSubmit={submitHandler}>
				<img src={SearchIcon} alt="search icon" />
				<label htmlFor="search">
					<input
						className={styles.searchInput}
						type="text"
						value={userInut}
						onChange={userInputChangeHandler}
						placeholder="Collection, item or user..."
					/>
				</label>
			</form>
		</div>
	)
}

export default Search
