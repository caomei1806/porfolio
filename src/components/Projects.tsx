import React from 'react'
import ProjectCard from './shared/ProjectCard'
import '../scss/App.scss'
const Projects = () => {
	return (
		<section className='projectBox'>
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</section>
	)
}

export default Projects
