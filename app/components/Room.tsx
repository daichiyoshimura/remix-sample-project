import { Link } from "@remix-run/react";

export interface RoomProps {
    id: string;
    name: string;
}

const Room = ({ id, name }: RoomProps) => {
    return (
        <Link to={`/rooms/${id}`} className="block p-4 border border-gray-200 rounded-md mb-2 hover:bg-gray-50">
            {name}
        </Link>
    );
};

export default Room;
