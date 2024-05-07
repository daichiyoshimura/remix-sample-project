import { TitleText, DescriptionText } from '@components';

export type NoContentsZoneProps = {
	title: string;
	description: string;
};

export const NoContentsZone = ({ title, description }: NoContentsZoneProps) => {
	return (
		<div className="h-full flex flex-col justify-center space-y-8">
			<div className="flex justify-center">
				<TitleText title={title} />
			</div>
			<div className="flex justify-center">
				<DescriptionText description={description} />
			</div>
		</div>
	);
};
