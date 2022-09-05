import classNames from 'classnames/bind'
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

const FooterItem = ({ title, children }) => {
	return (
		<div className={cx('item', 'col-lg-3')}>
			<h3>{title}</h3>
			{children}
		</div>
	)
}

export default FooterItem
