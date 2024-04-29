import { ReactNode } from 'react';
import { List } from '@components';
import { RoomCardProps } from '@features';

export type RoomCardListProps = {
	items: RoomCardProps[];
	render: (item: RoomCardProps) => ReactNode;
};

export const RoomCardList = ({ items, render }: RoomCardListProps) => {
	return (
		<List<RoomCardProps>
			items={items}
			render={render}
			className={`space-y-4 w-full`}
			divider={undefined}
		/>
	);
};
