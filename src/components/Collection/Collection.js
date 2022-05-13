import React, { useEffect, useState } from "react"
import Card from "./Card/Card"
import axios from "axios"
import styles from "./Collection.module.css"

function Collection() {
	const [flowersData, setFlowersData] = useState()

	useEffect(() => {
		const getNFT = async () => {
			const data = await axios.get(
				"https://testnets-api.opensea.io/assets?asset_contract_address=0x7084ce19e2771649e1384B2dc0d4E68bD69781b5&order_direction=asc"
			)
      console.log(data.data.assets)
		}

    getNFT()
	}, [])

	return (
		<>
			<Card
				id={0}
				name={"Bird"}
				traits={[{ value: 7 }]}
				image="https://ipfs.thirdweb.com/ipfs/QmZobrQGTyBgC3eMSyeUDmRQJLKsvtELUgFRXTgSVnZmeE/0.jpg"
			/>
		</>
	)
}

export default Collection
