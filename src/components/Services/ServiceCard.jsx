import { Button } from '../Button/Button.jsx';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import styles from './Services.module.scss';

export const ServiceCard = ({ title, description, call, image }) => {
	return (
		<div className={styles.serviceCard}>
			<div className={styles.content}>
				<p>{title}</p>
				<span>{description}</span>
				<Button size='m' href={call} iconBefore={faPhoneAlt} iconRotation={90}>
					Заказать
				</Button>
			</div>

			<div className={styles.image}>
				<img src={image} alt={description} />
			</div>
		</div>
	);
};
