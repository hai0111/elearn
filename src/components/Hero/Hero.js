import classNames from 'classnames/bind'
import { Container } from 'react-bootstrap'
import {
	BarChartSvg,
	CalculatorSVG,
	PaneTreeSVG,
	PointerSVG
} from '../../assets/Icons/Icons'
import Para from '../Para'
import styles from './Hero.module.scss'
import HeroItem from './HeroItem'

const cx = classNames.bind(styles)

const Hero = () => {
	return (
		<section className={cx('wrap')}>
			<div>
				<Para
					fontWeight={700}
					color="var(--color-yellow)"
					fontSize={'5rem'}
					content="Take the first step"
					uppercase
					center
					classes={'opacityOverlayShow'}
				/>
				<div className="overlayOpacity"></div>
			</div>
			<div>
				<Para
					fontWeight={700}
					fontSize={'7rem'}
					content="to knowledge with us"
					uppercase
					center
					classes={'opacityOverlayShow'}
				/>
				<div className="overlayOpacity"></div>
			</div>
			<Para
				to="/"
				content={'Ready to get Started?'}
				bold
				large
				classes={cx('start-btn', 'slideToTop')}
			/>
			<Container>
				<HeroItem
					to={'/'}
					backgroundColor={'var(--color-yellow)'}
					svg={<BarChartSvg />}
					content="Analysis of Algorithms"
				/>
				<HeroItem
					to={'/'}
					backgroundColor={'var(--color-top)'}
					svg={<CalculatorSVG />}
					content="Economics & Finance"
				/>
				<HeroItem
					to={'/'}
					backgroundColor={'#1ec1d9'}
					svg={<PaneTreeSVG />}
					content="Environmental Sciences"
				/>
				<HeroItem
					to={'/'}
					backgroundColor={'#10c45c'}
					svg={<PointerSVG />}
					content="Graphic & Web-design"
				/>
			</Container>
		</section>
	)
}

export default Hero
