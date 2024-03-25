import { ParticipantCardProps } from '~/components/ParticipantCard/ParticipantCard';

// GETリクエストの例
async function GetParticipants() {
	// JWTトークン
	const token: string = 'your_jwt_token_here';

	// GETリクエストの例
	callBackendAPI<any>('GET', '/participants', token)
		.then((responseBody) => {
			console.log('GETレスポンス:', responseBody);
			// レスポンスデータを指定された形式にマッピング
			const participants: ParticipantCardProps[] = responseBody.map(
				(item: any) => ({
					name: item.name,
					part: item.part,
				}),
			);
			return { participants };
		})
		.catch((error) => {
			console.error('GETエラー:', error);
			const participants: ParticipantCardProps[] = [];
			return { participants };
		});
}
