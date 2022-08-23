import React from 'react'
import './scss/App.scss'
import Sidebar from './components/shared/sidebar/Sidebar'
import About from './components/About'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import SectionDecoration from './components/shared/SectionDecoration'

function App() {
	return (
		<div className='App'>
			<Sidebar />
			<main>
				<About />
				<SectionDecoration placement={'top'} />
				<Technologies />
				<SectionDecoration placement={'bottom'} />
				<Projects />
			</main>
		</div>
	)
}

export default App
