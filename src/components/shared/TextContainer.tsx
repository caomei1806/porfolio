import React, { useEffect, useRef } from 'react'

const TextContainer = () => {
	const textReference = useRef<HTMLParagraphElement>(null)
	const hideDecorationLine = () => {
		const elementHeight: number = textReference.current
			? textReference.current.offsetHeight
			: 0
		const scrollHeight: number = textReference.current
			? textReference.current.scrollHeight
			: 0
		if (scrollHeight > elementHeight) {
			textReference.current?.classList.add('hide-text-decoration')
		} else {
			textReference.current?.classList.remove('hide-text-decoration')
		}
	}
	useEffect(() => {
		hideDecorationLine()
	}, [])
	useEffect(() => {
		function handleResize() {
			if (window.innerWidth <= 1100) {
				textReference.current?.parentElement?.classList.remove('w-50')
				textReference.current?.parentElement?.classList.add('w-100')
				console.log(textReference.current?.classList)
			}
		}
		window.addEventListener('resize', handleResize)
	})
	return (
		<section className='container__text container__text--right w-50'>
			<p ref={textReference}>
				I consider myself as a prosperous and bright person, that is looking
				forward to enter the professional market. I want to improve my skills,
				alter them, learn new techniques and technologies with help of more
				experienced proggrammers, to make sure that my abilities and commitment
				will be exploited to the full and that effect of the final product would
				be maximised.
			</p>
		</section>
	)
}

export default TextContainer
