import { ReactNode } from 'react';
import { Divider, VerticalList } from '@components';
import { ParticipantNameProps } from '@features';

export type ParticipantNameListProps = {
	items: ParticipantNameProps[];
	render: (item: ParticipantNameProps) => ReactNode;
};

export const ParticipantNameList = ({ items, render }: ParticipantNameListProps) => {
	return (
		<VerticalList<ParticipantNameProps>
			items={items}
			render={render}
			divider={<Divider className={'border-b border-gray-300'} />}
		/>
	);
};
