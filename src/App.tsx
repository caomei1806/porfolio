import React from 'react'
import './scss/App.scss'
import Sidebar from './components/shared/sidebar/Sidebar'
import About from './components/About'

function App() {
	return (
		<div className='App'>
			<Sidebar />
			<main>
				<About />
			</main>
		</div>
	)
}

export default App
