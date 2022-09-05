import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { images } from '../../assets'
import Para from '../Para/Para'
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

const Header = () => {
	return (
		<header className={cx('wrap')}>
			<Container className="d-flex align-items-center">
				<Link to={'/'} className="flex-grow-1">
					<picture>
						<source
							width={253}
							media="(max-width: 990px)"
							srcSet={images.logoXs}
						/>
						<img src={images.logo} alt="" width={253} />
					</picture>
				</Link>
				<div>
					<Para hover to={'/'} bold content={'course'} uppercase />
					<Para hover to={'/'} bold content={'plans'} uppercase />
					<Para hover to={'/'} bold content={'about us'} uppercase />
					<Para hover to={'/'} bold content={'contact us'} uppercase />
					<Para hover to={'/'} bold content={'shop'} uppercase />
					<Para
						fontSize={'2rem'}
						icon={<FontAwesomeIcon icon={faHeart} />}
						hover
					/>
					<Para
						classes={cx('search-btn')}
						icon={<FontAwesomeIcon icon={faSearch} />}
						hover
					/>
				</div>
			</Container>
		</header>
	)
}

export default Header
