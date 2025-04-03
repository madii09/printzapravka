import { Button } from '../Button/Button.jsx';

import styles from './RefilInformation.module.scss';

export const ServiceType = ({ title, description, call, image }) => {
	return (
		<div className={styles.serviceType}>
			<a href='/'>
				<img src={image} alt={title} />
			</a>
			<div className={styles.content}>
				<p>{title}</p>
				<span>{description}</span>
				<Button size='m' animation={false} href={call}>
					Узнать цену
				</Button>
			</div>
		</div>
	);
};
