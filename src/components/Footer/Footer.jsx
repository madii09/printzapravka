import styles from './Footer.module.scss';
import { classNames } from '../../utils/classNames.js';
import LogoImg from '../../assets/logo.png';

export const Footer = () => {
	return (
		<footer className={classNames('bg-dark', styles.footer)}>
			<div className='container'>
				<div className={styles.left}>
					<a href='#'>
						<img src={LogoImg} alt='logo' />
					</a>

					<p>Заправка и ремонт картриджей – быстро, качественно, выгодно!</p>

					<a className={styles.link} href='#'>
						Privacy of Policy
					</a>
				</div>

				<div className={styles.right}>
					<ul>
						<li>
							<p>Сиргалийский район, махалля Номданак, улица Файзли, дом 11</p>
						</li>
						<li>
							<p>tafakkurxizmatsamarasimchj@gmail.com</p>
						</li>
						<li>
							<p>+998 94 051 14 94</p>
						</li>
						<li>
							<p>Телеграм</p>
						</li>
					</ul>
				</div>

				<p className={styles.ft}>
					Разработка и реклама <span>Muxriddin.ads</span>
				</p>
			</div>
		</footer>
	);
};
