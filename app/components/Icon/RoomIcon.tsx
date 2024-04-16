import { MeetingRoom } from '@mui/icons-material';
import { NoSsr } from '@mui/base';

export type RoomIconProps = {
	className?: string;
};

export const RoomIcon = ({ className = '' }: RoomIconProps) => {
	return (
		<>
			<NoSsr>
				<MeetingRoom className={className} />
			</NoSsr>
		</>
	);
};
