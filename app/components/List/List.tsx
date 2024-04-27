export type ListProps<T> = {
	items: T[];
	render: (item: T) => React.ReactNode;
};

export const List = <T,>({ items, render }: ListProps<T>) => {
	return (
		<ul>
			{items.map((item, index) => (
				<li key={index}>{render(item)}</li>
			))}
		</ul>
	);
};
