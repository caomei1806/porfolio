import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../../scss/Sidebar.scss'

type SectionTitle = {
	title: String
}

const SectionTitleList = () => {
	const [sectionTitles, setSectionTitles] = useState<SectionTitle[]>([])
	const getSectionTitles = async () => {
		const response = await axios('/data/sectionTitles.json')
		setSectionTitles(response.data)
	}
	useEffect(() => {
		getSectionTitles()
	}, [])
	return (
		<section className='sectionTitles'>
			{sectionTitles?.map((title, index) => {
				return <p key={`title${index}`}>{title.title}</p>
			})}
		</section>
	)
}

export default SectionTitleList
