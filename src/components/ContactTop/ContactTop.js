import {
	faClock,
	faLocationDot,
	faPhoneFlip,
	faUser
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { Container } from 'react-bootstrap'
import Para from '../Para'
import styles from './ContactTop.module.scss'

const cx = classNames.bind(styles)

const ContactTop = () => {
	return (
		<div className={cx('wrap')}>
			<Container className="d-flex align-items-center p-3">
				<Para small classes="flex-grow-1" content={'English'} />
				<div>
					<Para
						small
						icon={<FontAwesomeIcon icon={faPhoneFlip} />}
						content="+1 212-226-3126"
					/>
					<Para
						small
						icon={<FontAwesomeIcon icon={faLocationDot} />}
						content="1010 Moon ave, New York, NY US"
					/>
					<Para
						small
						icon={<FontAwesomeIcon icon={faClock} />}
						content="Mon - Sat 8.00 - 18.00"
					/>
				</div>
				<div>
					<Para
						hover
						small
						to={'/'}
						icon={<FontAwesomeIcon icon={faUser} />}
						content="Login"
					/>
					<span></span>
					<Para hover small to={'/'} content="Register" />
				</div>
			</Container>
		</div>
	)
}

export default ContactTop
