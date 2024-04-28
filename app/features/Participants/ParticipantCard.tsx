import { AccountIcon, FlexCenter, VerticalFlexCenter } from '@components';

export type ParticipantCardProps = {
	id: string;
	name: string;
};

export const ParticipantCard = ({ id, name }: ParticipantCardProps) => {
	return (
		<div className="col-span-1 rounded bg-primary text-white">
			<VerticalFlexCenter>
				<FlexCenter>
					<AccountIcon />
				</FlexCenter>
				<FlexCenter>
					<div>{id}</div>
				</FlexCenter>
				<FlexCenter>
					<div className="text-sm mt-1">{name}</div>
				</FlexCenter>
			</VerticalFlexCenter>
		</div>
	);
};
