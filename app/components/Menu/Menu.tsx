import { Link } from '@remix-run/react';
import { Divider, List } from '@components';

type MenuItem = {
	title: string;
	to: string;
};

export const Menu = () => {
	const items: MenuItem[] = [
		{
			title: 'Rooms',
			to: '/rooms',
		},
		{
			title: 'Participants',
			to: '/participants',
		},
		{
			title: 'Account',
			to: `/accounts/${'1'}`,
		},
	];

	return (
		<List
			items={items}
			render={({ to, title }) => (
				<Link to={to} className="block px-3 py-4 rounded hover:bg-gray-700">
					{title}
				</Link>
			)}
			divider={<Divider className={'border-b border-gray-700'} />}
			className={'grow'}
		/>
	);
};
