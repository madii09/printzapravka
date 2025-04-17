import { CartridgeViewSvg } from '../SVGIcons/CartridgeViewSVG.jsx';
import { classNames } from '../../utils/classNames.js';

import styles from './RefilInformation.module.scss';
import { Button } from '../Button/Button.jsx';
import { REFILL_CARTRIDGES } from '../../utils/data.js';
import { ServiceType } from './ServiceType.jsx';

export const RefilInformation = () => {
	return (
		<section className={classNames('bg-dark', styles.refilInformationContainer)}>
			<div className={classNames('container', styles.refilInformation)}>
				<div className={styles.left}>
					<p>Надежность и качество</p>
					<h2>Заправка картриджей.</h2>

					<div className={styles.cartridgeRefill}>
						<div className={styles.content}>
							<CartridgeViewSvg />

							<div className={styles.descriptions}>
								<h2>Заправка и продажа картриджей и принтеров</h2>
								<p>Качественная заправка, новые картриджи и надежные принтеры по выгодным ценам</p>
							</div>
						</div>

						<hr />

						<Button size={'lg'} className={styles.btn} id='btn'>
							Узнать цену
						</Button>
					</div>
				</div>

				<div className={styles.right}>
					{REFILL_CARTRIDGES.map(({ id, title, description, call, image }) => (
						<ServiceType
							key={id}
							title={title}
							description={description}
							call={call}
							image={image}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
