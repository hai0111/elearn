import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Para.module.scss'

const cx = classNames.bind(styles)

const Para = ({
	icon,
	to,
	content,
	color,
	center,
	hover,
	uppercase,
	small,
	large,
	bold,
	fontSize,
	fontWeight,
	classes,
	...passProps
}) => {
	const Para = to ? Link : 'div'
	return (
		<Para
			className={cx('item', {
				[classes]: classes,
				hover: hover,
				small,
				large,
				bold,
				uppercase,
				center
			})}
			style={{ fontSize, fontWeight, color }}
			to={to}
			{...passProps}
		>
			{icon} <div>{content}</div>
		</Para>
	)
}

export default Para
