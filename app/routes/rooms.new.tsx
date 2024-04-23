import { useNavigate } from '@remix-run/react';
import { CreateRoomModal } from '@features';
import { roomListPageAction } from '@server/actions';
import { roomListPageLoader } from '@server/loaders';

export const loader = roomListPageLoader;

export const action = roomListPageAction;

const RoomListPage = () => {
	const navigate = useNavigate();
	const handleClose = () => {
		navigate('../');
	};
	return <CreateRoomModal isOpen={true} onClose={handleClose} />;
};

export default RoomListPage;
