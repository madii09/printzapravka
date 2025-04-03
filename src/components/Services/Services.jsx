import { ServiceCard } from './ServiceCard.jsx';
import { classNames } from '../../utils/classNames.js';
import { SERVICES } from '../../utils/data.js';

import styles from './Services.module.scss';

export const Services = () => {
	return (
		<div className={classNames('container', styles.services)}>
			<h2>Наши Услуги</h2>
			<p>Профессиональный ремонт офисной техники</p>

			<div className={styles.servicesContainer}>
				{SERVICES.map(({ id, title, description, call, image }) => (
					<ServiceCard key={id} title={title} description={description} call={call} image={image} />
				))}
			</div>
		</div>
	);
};
