import { MeetingRoom } from '@mui/icons-material';
import { EditButton } from '@components';
import { NoSsr } from '@mui/base';

export type RoomProfileProps = {
	id: string;
	name: string;
	createdAt: string;
};

export const RoomProfile = (
	{ id, name, createdAt, onClick }: RoomProfileProps & { onClick: () => void },
) => {
	return (
		<>
			<div className="flex items-center">
				<NoSsr>
					<MeetingRoom
						className="mr-4 flex-shrink-0"
						fontSize="large"
						fill="currentColor"
					/>
				</NoSsr>
				<div className="flex flex-col">
					<div className="flex items-center space-x-2">
						<h2 className="text-lg font-semibold">{name}</h2>
						<EditButton onClick={onClick} />
					</div>
					<p>ID: {id}</p>
					<p>Created At: {createdAt}</p>
				</div>
			</div>
		</>
	);
};
