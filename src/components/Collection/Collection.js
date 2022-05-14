import React, { useEffect, useState } from "react"
import Card from "./Card/Card"
import axios from "axios"
import styles from "./Collection.module.css"

const TEST_DATA = [
	{
		id: 0,
		name: "Bird",
		traits: [{ value: 7 }],
		image_original_url:
			"https://ipfs.thirdweb.com/ipfs/QmZobrQGTyBgC3eMSyeUDmRQJLKsvtELUgFRXTgSVnZmeE/0.jpg"
	},
	{
		id: 0,
		name: "Bird",
		traits: [{ value: 7 }],
		image_original_url:
			"https://ipfs.thirdweb.com/ipfs/QmZobrQGTyBgC3eMSyeUDmRQJLKsvtELUgFRXTgSVnZmeE/0.jpg"
	},
	{
		id: 0,
		name: "Bird",
		traits: [{ value: 7 }],
		image_original_url:
			"https://ipfs.thirdweb.com/ipfs/QmZobrQGTyBgC3eMSyeUDmRQJLKsvtELUgFRXTgSVnZmeE/0.jpg"
	},
	{
		id: 0,
		name: "Bird",
		traits: [{ value: 7 }],
		image_original_url:
			"https://ipfs.thirdweb.com/ipfs/QmZobrQGTyBgC3eMSyeUDmRQJLKsvtELUgFRXTgSVnZmeE/0.jpg"
	},
	{
		id: 0,
		name: "Bird",
		traits: [{ value: 7 }],
		image_original_url:
			"https://ipfs.thirdweb.com/ipfs/QmZobrQGTyBgC3eMSyeUDmRQJLKsvtELUgFRXTgSVnZmeE/0.jpg"
	}
]

function Collection() {
	const [flowersData, setFlowersData] = useState()

	useEffect(() => {
		const getNFT = async () => {
			const data = await axios.get(
				"https://testnets-api.opensea.io/assets?asset_contract_address=0xE73feAA2d9DDa988c7A5A84940be29406d887b86&order_direction=asc"
			)
			console.log(data.data)
			setFlowersData(data.data.assets)
		}
		getNFT()
	}, [])

	console.log(flowersData)

	return (
		<div className={styles.flowers}>
			{TEST_DATA.map((flower) => (
				<Card
					id={flower.id}
					name={flower.name}
					traits={flower.traits}
					image={flower.image_original_url}
				/>
			))}
		</div>
	)
}

export default Collection
