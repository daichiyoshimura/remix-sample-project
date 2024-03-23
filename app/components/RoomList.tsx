import React from 'react';
import Room from './Room';

interface RoomListProps {
  rooms: { id: string; name: string }[];
}

const RoomList = ({ rooms }: RoomListProps) => {
  return (
    <div>
      {rooms.map(room => (
        <Room key={room.id} id={room.id} name={room.name} />
      ))}
    </div>
  );
};

export default RoomList;
