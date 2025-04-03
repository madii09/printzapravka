import styles from './Statistics.module.scss';
import { classNames } from '../../utils/classNames.js';

export const Statistics = () => {
	return (
		<div className={classNames(styles.statistics)}>
			<div className='container'>
				<ul>
					<li>
						<i className={classNames(styles.bigDot, styles.red)}></i>
						<p>6 лет</p>
						<span>На рынке</span>
					</li>
					<li>
						<i className={classNames(styles.bigDot, styles.brown)}></i>
						<p>14000</p>
						<span>Принтеров отремонтировано</span>
					</li>
					<li>
						<i className={classNames(styles.bigDot, styles.green)}></i>
						<p>250</p>
						<span>Отзывов</span>
					</li>
				</ul>
			</div>
		</div>
	);
};
