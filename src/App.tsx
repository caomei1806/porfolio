import React from 'react'
import './scss/App.scss'
import Sidebar from './components/shared/sidebar/Sidebar'
import About from './components/About'
import UsedTechnologies from './components/UsedTechnologies'

function App() {
	return (
		<div className='App'>
			<Sidebar />
			<main>
				<About />
				<UsedTechnologies />
			</main>
		</div>
	)
}

export default App
