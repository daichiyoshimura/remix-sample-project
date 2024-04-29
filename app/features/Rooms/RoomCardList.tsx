import { ReactNode } from 'react';
import { VerticalList } from '@components';
import { RoomCardProps } from '@features';

export type RoomCardListProps = {
	items: RoomCardProps[];
	render: (item: RoomCardProps) => ReactNode;
};

export const RoomCardList = ({ items, render }: RoomCardListProps) => {
	return (
		<VerticalList<RoomCardProps>
			items={items}
			render={render}
			className={`space-y-4`}
			divider={undefined}
		/>
	);
};
