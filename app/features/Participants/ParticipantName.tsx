import { Link } from '@remix-run/react';
import { DescriptionText } from '@components';

export type ParticipantNameProps = {
	id: string;
	name: string;
};

export const ParticipantName = ({ id, name, to }: ParticipantNameProps & { to: string }) => {
	return (
		<Link to={to}>
			<div className={`w-full flex justify-start align-middle gap-x-4 p-4`}>
				<div className="hidden">{id}</div>
				<DescriptionText description={name} />
			</div>
		</Link>
	);
};
