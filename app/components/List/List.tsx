import React from 'react';

export type ListProps<T> = {
	items: T[];
	render: (item: T) => React.ReactNode;
	divider?: React.ReactNode;
	className: string;
};

export const List = <T,>({ items, render, divider = undefined, className }: ListProps<T>) => {
	return (
		<ul className={className}>
			{items.map((item, index) => (
				<React.Fragment key={index}>
					<li key={index}>{render(item)}</li>
					{index !== items.length - 1 && divider}
				</React.Fragment>
			))}
		</ul>
	);
};
