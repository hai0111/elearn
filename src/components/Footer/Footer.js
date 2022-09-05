import {
	faAngleRight,
	faLocationDot,
	faPhone,
	faPrint,
	faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { Container } from 'react-bootstrap'
import { images } from '../../assets'
import Para from '../Para'
import styles from './Footer.module.scss'
import FooterItem from './FooterItem'

const cx = classNames.bind(styles)

const Footer = () => {
	return (
		<footer className={cx('wrap')}>
			<Container>
				<div className="row gx-5">
					<FooterItem title={'About'}>
						<p>
							Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Morbi at
							egestas magna.
						</p>
						<p>
							Eget lectus molestie, pharetra sem sed, scelerisque felis. Ut ut
							erat sed nisl finibus tristique. Etiam sit amet ipsum laoreet,
							iaculis mi ut, ullamcorper nibh.
						</p>
						<Para
							to={'/'}
							classes={cx('learn-btn')}
							content="Learning Now"
							uppercase
						/>
					</FooterItem>
					<FooterItem title={'Popular Courses'}>
						<Para
							to={'/'}
							icon={<img src={images.footerIcon} />}
							content={
								<>
									Web Coding and Apache Basics <br /> <span>By admin</span>
								</>
							}
						/>
						<Para
							to={'/'}
							icon={<img src={images.footerIcon} />}
							content={
								<>
									Web Coding and Apache Basics <br /> <span>By admin</span>
								</>
							}
						/>
						<Para
							to={'/'}
							icon={<img src={images.footerIcon} />}
							content={
								<>
									Web Coding and Apache Basics <br /> <span>By admin</span>
								</>
							}
						/>
					</FooterItem>
					<FooterItem title={'Pages'}>
						<Para
							to={'/'}
							hover
							uppercase
							icon={<FontAwesomeIcon icon={faAngleRight} />}
							content="Blog"
						/>
						<Para
							to={'/'}
							hover
							uppercase
							icon={<FontAwesomeIcon icon={faAngleRight} />}
							content="Membership Account"
						/>
						<Para
							to={'/'}
							hover
							uppercase
							icon={<FontAwesomeIcon icon={faAngleRight} />}
							content="Sample Page"
						/>
						<Para
							to={'/'}
							hover
							uppercase
							icon={<FontAwesomeIcon icon={faAngleRight} />}
							content="Shortcodes"
						/>
						<Para
							to={'/'}
							hover
							uppercase
							icon={<FontAwesomeIcon icon={faAngleRight} />}
							content="Typography"
						/>
						<Para
							to={'/'}
							hover
							uppercase
							icon={<FontAwesomeIcon icon={faAngleRight} />}
							content="User Account"
						/>
					</FooterItem>
					<FooterItem title={'Contact'}>
						<Para
							icon={<FontAwesomeIcon icon={faLocationDot} />}
							content="USA, Callifornia 20, First Avenue, Callifornia"
						/>
						<Para
							icon={<FontAwesomeIcon icon={faPhone} />}
							content="Tel.: +1 212 458 300 32"
						/>
						<Para
							icon={<FontAwesomeIcon icon={faPrint} />}
							content="Fax: +1 212 375 24 14"
						/>
						<Para
							icon={<FontAwesomeIcon icon={faEnvelope} />}
							content="info@masterstudy.com"
							to={'/'}
						/>
					</FooterItem>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
