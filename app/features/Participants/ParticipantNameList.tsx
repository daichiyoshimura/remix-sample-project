import { ReactNode } from 'react';
import { Divider, VerticalList } from '@components';
import { ParticipantNameProps } from '@features';

export type ParticipantnameListProps = {
	items: ParticipantNameProps[];
	render: (item: ParticipantNameProps) => ReactNode;
};

export const ParticipantNameList = ({ items, render }: ParticipantnameListProps) => {
	return (
		<VerticalList<ParticipantNameProps>
			items={items}
			render={render}
			divider={<Divider className={'border-b border-gray-300'} />}
		/>
	);
};
