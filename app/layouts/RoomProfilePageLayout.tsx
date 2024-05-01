import { ReactNode } from 'react';

export type RoomProfilePageLayoutProps = {
	roomProfile: ReactNode;
	participantGrid: ReactNode;
	deleteRoomButton: ReactNode;
};

export const RoomProfilePageLayout = (
	{ roomProfile, participantGrid, deleteRoomButton }: RoomProfilePageLayoutProps,
) => {
	return (
		<div className={`w-full flex flex-col justify-start gap-y-4`}>
			{roomProfile}
			{participantGrid}
			<div className={`w-full flex justify-center align-middle gap-x-4`}>
				{deleteRoomButton}
			</div>
		</div>
	);
};
