export type AccountProfileProps = {
	id: string;
	name: string;
	email: string;
};

export const AccountProfile = ({ id, name, email }: AccountProfileProps) => {
	return (
		<div className="rounded-lg overflow-hidden w-full pb-4">
			<table className="min-w-full divide-y divide-gray-200">
				<tbody className="bg-white divide-y divide-gray-200">
					<tr>
						<td className="px-6 py-4 whitespace-nowrap">
							<span className="text-sm font-medium text-gray-900">ID:</span>
						</td>
						<td className="px-6 py-4 whitespace-nowrap">
							<span className="text-sm text-gray-500">{id}</span>
						</td>
					</tr>
					<tr>
						<td className="px-6 py-4 whitespace-nowrap">
							<span className="text-sm font-medium text-gray-900">Name:</span>
						</td>
						<td className="px-6 py-4 whitespace-nowrap">
							<span className="text-sm text-gray-500">{name}</span>
						</td>
					</tr>
					<tr>
						<td className="px-6 py-4 whitespace-nowrap">
							<span className="text-sm font-medium text-gray-900">E-Mail:</span>
						</td>
						<td className="px-6 py-4 whitespace-nowrap">
							<span className="text-sm text-gray-500">{email}</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
