import React from 'react'
import TechnologyCard from './shared/TechnologyCard'
import '../scss/App.scss'
const UsedTechnologies = () => {
	return (
		<section className='technologyBox'>
			<TechnologyCard />
			<TechnologyCard />
			<TechnologyCard />
		</section>
	)
}

export default UsedTechnologies
