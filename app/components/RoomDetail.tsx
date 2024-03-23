import React from 'react';

interface RoomDetailProps {
  id: string;
  name: string;
}

const RoomDetail = ({ id, name }: RoomDetailProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>ID: {id}</p>
      {/* ここに詳細情報を表示 */}
    </div>
  );
};

export default RoomDetail;
