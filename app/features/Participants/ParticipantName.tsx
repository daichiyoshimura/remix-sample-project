import { Link } from '@remix-run/react';
import { DescriptionText, FlexStart } from '@components';

export type ParticipantNameProps = {
	id: string;
	name: string;
};

export const ParticipantName = ({ id, name, to }: ParticipantNameProps & { to: string }) => {
	return (
		<Link to={to}>
			<FlexStart className={'p-4'}>
				<div className="hidden">{id}</div>
				<DescriptionText description={name} />
			</FlexStart>
		</Link>
	);
};
