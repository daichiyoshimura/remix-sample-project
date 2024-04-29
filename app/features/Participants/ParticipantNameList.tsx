import { ReactNode } from 'react';
import { Divider, List } from '@components';
import { ParticipantNameProps } from '@features';

export type ParticipantNameListProps = {
	items: ParticipantNameProps[];
	render: (item: ParticipantNameProps) => ReactNode;
};

export const ParticipantNameList = ({ items, render }: ParticipantNameListProps) => {
	return (
		<List<ParticipantNameProps>
			items={items}
			render={render}
			divider={<Divider className={'border-b border-gray-300'} />}
			className={`w-full`}
		/>
	);
};
