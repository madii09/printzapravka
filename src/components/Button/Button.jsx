import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { classNames } from '../../utils/classNames';

import styles from './Button.module.scss';

export const Button = ({
	size = 'm',
	animation = true,
	href,
	iconBefore,
	iconAfter,
	iconRotation,
	children,
	className,
	onClick,
	type = 'button',
}) => {
	if (iconAfter && iconBefore) {
		throw new Error('You can only use `iconBefore` or `iconAfter`');
	}
	const isLink = !!href;

	const Component = isLink ? 'a' : 'button';

	const handleClick = e => {
		e.preventDefault(); // Prevent default behavior for links if necessary
		onClick?.(); // Trigger the onClick handler passed from the parent component
	};

	return (
		<Component
			href={isLink ? href : undefined}
			onClick={handleClick}
			type={!isLink ? type : undefined}
			className={classNames(styles.button, styles[size], animation && styles.animate, className)}
		>
			{iconBefore && (
				<FontAwesomeIcon icon={iconBefore} className={styles.iconBefore} rotation={iconRotation} />
			)}
			{children}
			{iconAfter && (
				<FontAwesomeIcon icon={iconAfter} className={styles.iconAfter} rotation={iconRotation} />
			)}
		</Component>
	);
};
