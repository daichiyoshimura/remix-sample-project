export type ListProps<T> = {
	items: T[];
	render: (item: T) => React.ReactNode;
	className: string;
};

export const List = <T,>({ items, render, className }: ListProps<T>) => {
	return (
		<ul className={className}>
			{items.map((item, index) => (
				<li key={index}>{render(item)}</li>
			))}
		</ul>
	);
};
