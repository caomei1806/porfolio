import React from 'react'
import '../../scss/Card.scss'
const Card = () => {
	const cardBanner =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png'
	return (
		<article className='card'>
			<section className='card__banner'>
				<img src={cardBanner} alt='banner' />
			</section>
			<section className='card__description'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut
					recusandae eos dolore natus nihil mollitia omnis rerum veritatis
					minima!
				</p>
			</section>
		</article>
	)
}

export default Card
