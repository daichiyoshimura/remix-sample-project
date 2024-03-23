import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import RoomProfile, { RoomProfileProps } from "../components/RoomProfile";

export const loader: LoaderFunction = async ({ params }) => {
    const id = params.id as string; // paramsからidを取得
    // ここでidに基づいて部屋の詳細データを取得するロジックを追加
    const roomProfileProps: RoomProfileProps = { id, name: `Room ${id}` }; // サンプルデータ

    return roomProfileProps;
};

const RoomProfilePage = () => {
    const roomProfileProps: RoomProfileProps = useLoaderData();

    return (
        <div>
            <h1>Room Profile</h1>
            <RoomProfile id={roomProfileProps.id} name={roomProfileProps.name} />
        </div>
    );
};

export default RoomProfilePage;