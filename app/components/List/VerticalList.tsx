import { List } from '@components';

export type VerticalListProps<T> = {
	items: T[];
	render: (item: T) => React.ReactNode;
	divider: React.ReactNode;
};

export const VerticalList = <T,>({ items, render, divider }: VerticalListProps<T>) => {
	return <List items={items} render={render} className={'w-full'} divider={divider} />;
};
