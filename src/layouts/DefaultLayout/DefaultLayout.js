import { Fragment } from 'react'
import ContactTop from '../../components/ContactTop'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles)

const DefaultLayout = ({ children }) => {
	return (
		<Fragment>
			<div className={cx('top')}>
				<ContactTop />
				<Header />
			</div>
			{children}
			<Footer />
		</Fragment>
	)
}

export default DefaultLayout
