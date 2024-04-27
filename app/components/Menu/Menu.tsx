import React from 'react';
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
			to: '/account',
		},
		{
			title: 'Sign Out',
			to: '/',
		},
	];

	return (
		<div className="fixed top-12 bottom-10 w-32 bg-gray-800 text-white p-2 z-10 overflow-y-auto">
			<ul>
				{items.map((item, index) => (
					<React.Fragment key={index}>
						<li>
							<Link
								to={item.to}
								className="block px-3 py-4 rounded hover:bg-gray-700"
							>
								{item.title}
							</Link>
						</li>
						{index !== items.length - 1 && <li className="border-b border-gray-700" />}
					</React.Fragment>
				))}
			</ul>
		</div>
	);
};
