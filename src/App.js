import styles from "./App.module.css"
import Collection from "./components/Collection/Collection"
import Header from "./components/Header/Header"

function App() {
	return (
		<div className={styles.container}>
			<Header />
			<Collection/>
		</div>
	)
}

export default App
