import React from 'react'

type Props = {
	placement: String
}
const SectionDecoration = (props: Props) => {
	const decorator = 'https://cdn-icons-png.flaticon.com/512/6717/6717364.png'
	return (
		<aside className={`decorator ${props.placement === 'top' ? 'top' : ''}`}>
			<img src={decorator} alt='' />
		</aside>
	)
}

export default SectionDecoration
