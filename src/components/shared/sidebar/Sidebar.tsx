import React from 'react'
import ProgressBar from './ProgressBar'
import SectionTitleList from './SectionTitleList'
import '../../../scss/Sidebar.scss'

const Sidebar = () => {
	return (
		<nav className='sidebar'>
			<SectionTitleList />
			<ProgressBar />
		</nav>
	)
}

export default Sidebar
