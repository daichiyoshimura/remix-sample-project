import { Link } from '@remix-run/react';

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
			to: '/',
		},
		{
			title: 'Account',
			to: '/',
		},
		{
			title: 'Sign Out',
			to: '/',
		},
	];

	return (
		<div className="fixed top-12 bottom-10 w-32 bg-gray-800 text-white p-2 overflow-y-auto z-10">
			<ul>
				{items.map((item, index) => (
					<li key={index} className="mb-4">
						<Link to={item.to} className="block px-3 py-2 rounded hover:bg-gray-700">
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
