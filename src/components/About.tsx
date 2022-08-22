import React from 'react'
import '../scss/App.scss'
import TextContainer from './shared/TextContainer'

const About = () => {
	return (
		<section className='about container'>
			<TextContainer />
			<section className='container__banner'>
				<img
					src='https://i.pinimg.com/564x/cd/8c/cf/cd8ccf7eecdd389193c7538c074d4c88.jpg'
					alt='banner'
				/>
			</section>
		</section>
	)
}

export default About
