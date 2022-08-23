import React, { useState } from 'react'
import '../../scss/ProjectCard.scss'

const ProjectCard = () => {
	const cartPicture: string =
		'https://i.pinimg.com/564x/cd/13/85/cd138530270a740ebf46f7c481754a42.jpg'
	const cardTitleIcon: string =
		'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'
	const cardInfo =
		'Note that the development build is not optimized.To create a production build, use yarn build.'

	const [showCardInfo, setShowCardInfo] = useState<Boolean>()

	return (
		<article
			className='projectCard projectCard--pictureCard'
			style={{ backgroundImage: `url("${cartPicture}")` }}
		>
			<aside
				className='projectCard__title--withPicture'
				onMouseOver={() => setShowCardInfo(true)}
				onMouseOut={() => setShowCardInfo(false)}
			>
				{cardTitleIcon && <img src={cardTitleIcon} alt='icon' />}
				{showCardInfo && <span>{cardInfo}</span>}
			</aside>
		</article>
	)
}

export default ProjectCard
