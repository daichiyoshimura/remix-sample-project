// バックエンドAPIのURL
const API_URL = 'https://example.com/api';

// バックエンドAPIを呼び出す関数
async function callBackendAPI<T>(method: string, endpoint: string, token: string, requestBody: any = {}, params: any = {}): Promise<T> {
    // HTTPリクエストの設定
    const requestOptions: RequestInit = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    };

    // リクエストボディがある場合、JSON文字列に変換して追加
    if (Object.keys(requestBody).length !== 0) {
        requestOptions.body = JSON.stringify(requestBody);
    }

    // リクエストパラメータがある場合、URLに追加
    if (Object.keys(params).length !== 0) {
        const urlParams = new URLSearchParams(params);
        endpoint += `?${urlParams.toString()}`;
    }

    try {
        // APIにリクエストを送信し、レスポンスを取得
        const response = await fetch(`${API_URL}${endpoint}`, requestOptions);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		return (await response.json()) as T;

    } catch (error) {
        // エラーが発生した場合、エラーメッセージをコンソールに出力してエラーをスローする
        console.error('API呼び出しエラー:', error);
        throw error;
    }
}

// 使用例:
// JWTトークン
const token: string = 'your_jwt_token_here';

// GETリクエストの例
callBackendAPI<any>('GET', '/example', token)
    .then(({ body, statusCode }) => {
        console.log('GETステータスコード:', statusCode);
        console.log('GETレスポンス:', body);
    })
    .catch(error => console.error('GETエラー:', error));

/*
// 使用例:
// 使用例:
// JWTトークン
const token: string = 'your_jwt_token_here';

// GETリクエストの例
callBackendAPI<any>('GET', '/example', token)
    .then(({ body, statusCode }) => {
        console.log('GETステータスコード:', statusCode);
        console.log('GETレスポンス:', body);
    })
    .catch(error => console.error('GETエラー:', error));

// POSTリクエストの例
const postData: any = { key: 'value' };
callBackendAPI<any>('POST', '/example', token, postData)
	.then((data) => console.log('POSTレスポンス:', data))
	.catch((error) => console.error('POSTエラー:', error));

// PUTリクエストの例
const putData: any = { key: 'new_value' };
callBackendAPI<any>('PUT', '/example/123', token, putData)
	.then((data) => console.log('PUTレスポンス:', data))
	.catch((error) => console.error('PUTエラー:', error));

// PATCHリクエストの例
const patchData: any = { key: 'updated_value' };
callBackendAPI<any>('PATCH', '/example/123', token, patchData)
	.then((data) => console.log('PATCHレスポンス:', data))
	.catch((error) => console.error('PATCHエラー:', error));

// DELETEリクエストの例
callBackendAPI<any>('DELETE', '/example/123', token)
	.then((data) => console.log('DELETEレスポンス:', data))
	.catch((error) => console.error('DELETEエラー:', error));
*/