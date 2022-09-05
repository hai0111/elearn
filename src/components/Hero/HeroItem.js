import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Hero.module.scss'

const cx = classNames.bind(styles)

const HeroItem = ({ svg, content, backgroundColor, to }) => {
	return (
		<Link to={to} className={cx('item')} style={{ backgroundColor }}>
			{svg}
			<p>{content}</p>
		</Link>
	)
}

export default HeroItem
