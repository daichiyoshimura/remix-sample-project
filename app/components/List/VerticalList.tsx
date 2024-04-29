import { List } from '@components';

export type VerticalListProps<T> = {
	items: T[];
	render: (item: T) => React.ReactNode;
	className?: string;
	divider?: React.ReactNode;
};

export const VerticalList = <T,>(
	{ items, render, className = '', divider = undefined }: VerticalListProps<T>,
) => {
	return (
		<List items={items} render={render} className={`w-full ${className}`} divider={divider} />
	);
};
