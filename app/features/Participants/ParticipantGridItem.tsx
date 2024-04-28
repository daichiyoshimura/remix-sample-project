import { AccountIcon, FlexCenter, VerticalFlexCenter } from '@components';

export type ParticipantGridItemProps = {
	id: string;
	name: string;
};

export const ParticipantGridItem = ({ id, name }: ParticipantGridItemProps) => {
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
