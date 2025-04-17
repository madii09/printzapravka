import { FastGoSvg } from '../SVGIcons/FastGoSVG.jsx';
import { RefillCartridgeSvg } from '../SVGIcons/RefillCartridgeSVG.jsx';
import { GuaranteeSecondarySvg } from '../SVGIcons/GuaranteeSecondarySVG.jsx';
import { SupportSvg } from '../SVGIcons/SupportSVG.jsx';

import styles from './Advantages.module.scss';

import SquareImg from '../../assets/background-square-dark.png';
import PrintImg from '../../assets/banner-bg-img.png';
import { classNames } from '../../utils/classNames.js';

export const Advantages = () => {
	return (
		<div className='bg-dark'>
			<div className={styles.bgLight}>
				<div className={classNames('container', styles.advantages)}>
					<p>
						Клиенты подтверждают высокое качество наших услуг{' '}
						<span>
							****<span style={{ opacity: 0.5 }}>*</span>
						</span>{' '}
						4.5/5 4.8 из 5 на основе 250 отзывов
					</p>
					<h2>
						Наши <span>*Перемущество</span>.
					</h2>

					<div className={styles.content}>
						<div className={styles.part1}>
							<div className={styles.item}>
								<FastGoSvg />
								<p>Быстрый выезд</p>
								<span>Можете доверять мы Приедем к вам в течение</span>
							</div>
							<div className={styles.item}>
								<RefillCartridgeSvg />
								<p>Заправка картриджей</p>
								<span>Максимально быстрая заправка картриджа</span>
							</div>
						</div>

						<div className={styles.part2}>
							<img src={PrintImg} alt='Print' />
							<img className={styles.bgSquareImg} src={SquareImg} alt='none' />

							<p>Качество, скорость и выгодные цены – работаем для вас!</p>
						</div>

						<div id='gurantee-card' className={styles.part3}>
							<div className={styles.item}>
								<GuaranteeSecondarySvg />
								<p>Гарантия на товар</p>
								<span>Используем только оригинальные картриджи и тонеры</span>
							</div>
							<div className={styles.item}>
								<SupportSvg />
								<p>Оперативная поддержка</p>
								<span>Быстро решаем вопросы и устраняем неполадки</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
