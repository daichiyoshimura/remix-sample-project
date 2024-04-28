export type GridProps<T> = {
	items: T[];
	render: (item: T) => React.ReactNode;
};

export const Grid = <T,>({ items, render }: GridProps<T>) => {
	return (
		<div
			className={`w-full grid grid-cols-[repeat(auto-fill,minmax(theme(spacing.60),1fr))] grid-flow-row gap-4`}
		>
			{items.map((item) => render(item))}
		</div>
	);
};
