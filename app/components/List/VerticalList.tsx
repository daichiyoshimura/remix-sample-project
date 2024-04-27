import { List } from '@components';

export type VerticalListProps<T> = {
	items: T[];
	render: (item: T) => React.ReactNode;
};

export const VerticalList = <T,>({ items, render }: VerticalListProps<T>) => {
	return <List items={items} render={render} className={'space-y-4 w-full'} />;
};
