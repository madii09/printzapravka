export const classNames = (...classnames) => {
	return classnames.filter(Boolean).join(' ');
};
