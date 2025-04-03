import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { classNames } from '../../utils/classNames';

import styles from './Button.module.scss';

export const Button = ({
	size = 'm',
	animation = true,
	href = '#',
	iconBefore,
	iconAfter,
	iconRotation,
	children,
	className,
}) => {
	if (iconAfter && iconBefore) {
		throw new Error('You can only use `iconBefore` or `iconAfter`');
	}

	return (
		<a
			href={href}
			className={classNames(styles.button, styles[size], animation && styles.animate, className)}
		>
			{iconBefore && (
				<FontAwesomeIcon icon={iconBefore} className={styles.iconBefore} rotation={iconRotation} />
			)}
			{children}
			{iconAfter && (
				<FontAwesomeIcon icon={iconAfter} className={styles.iconAfter} rotation={iconRotation} />
			)}
		</a>
	);
};
