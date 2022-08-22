import React, { useState } from 'react'
import '../../scss/Card.scss'

const TechnologyCard = () => {
	const cartPicture: string =
		'https://i.pinimg.com/564x/f1/ae/9a/f1ae9a28b2ca9a86c200a9314e9fb73e.jpg'
	const cardTitleIcon: string =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'
	const cardInfo =
		'Note that the development build is not optimized.To create a production build, use yarn build.'

	const [showCardInfo, setShowCardInfo] = useState<Boolean>()

	return (
		<article
			className=' card card--pictureCard'
			style={{ backgroundImage: `url("${cartPicture}")` }}
		>
			<aside
				className='card__title--withPicture'
				onMouseOver={() => setShowCardInfo(true)}
				onMouseOut={() => setShowCardInfo(false)}
			>
				{cardTitleIcon && <img src={cardTitleIcon} alt='icon' />}
				{showCardInfo && <span>{cardInfo}</span>}
			</aside>
		</article>
	)
}

export default TechnologyCard
