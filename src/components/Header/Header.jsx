import { Button } from '../Button/Button';
import { classNames } from '../../utils/classNames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GuaranteeSvg } from '../SVGIcons/GuaranteeSVG.jsx';
import { QualityCheckSvg } from '../SVGIcons/QualityCheckSVG.jsx';

import styles from './Header.module.scss';
import { faLongArrowAltRight, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import LogoImg from '../../assets/logo.png';
import BannerImg from '../../assets/banner-bg-img.png';
import BannerColorImg from '../../assets/banner-bg-color.png';

export const Header = () => {
	return (
		<header className={classNames('bg-dark', styles.header)}>
			<div className='container'>
				<nav className={styles.nav}>
					<a href='#'>
						<img src={LogoImg} alt='logo' />
					</a>

					<div className={styles.call}>
						<a href='tel:+998940511494' className={styles.callContent}>
							<FontAwesomeIcon icon={faPhoneAlt} rotation={90} color={'black'} />
						</a>
					</div>
				</nav>

				<div className={styles.content}>
					<div className={styles.right}>
						<h1>Заправка картриджей в Ташкенте.</h1>
						<p>Ремонт и заправка картриджей. Оперативный выезд мастера на дом и в офис!</p>

						<ul>
							<li>
								<QualityCheckSvg />
								<span>Быстро и качественно</span>
							</li>

							<li>
								<GuaranteeSvg />
								<span>Гарантия на услуги</span>
							</li>
						</ul>

						<Button
							href='tel:+998940511494'
							size={'lg'}
							iconAfter={faLongArrowAltRight}
							className={styles.rightButton}
						>
							+998 94 051 14 94
						</Button>
					</div>
					<div className={styles.left}>
						<img src={BannerImg} alt='Заправка картриджей в Ташкенте' />
						<img className={styles.backgroundColor} src={BannerColorImg} alt='none' />
					</div>
				</div>
			</div>
		</header>
	);
};
